import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useReducer } from "react";
import Axios from "../helpers/Axios";

export const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  INTIALIZE: "INITIALIZE",
  REGISTER: "  REGISTER",
};

const initialAuthState = {
  isAuthenticated: false,
  user: null,
};
const authContext = React.createContext({ ...initialAuthState });

//! -- set the session --
const setSession = (accessToken, user) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.clear();
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case ACTIONS.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case ACTIONS.INTIALIZE: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    }
    case ACTIONS.REGISTER: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, authDispatch] = useReducer(reducer, initialAuthState);

  // !--- LOGIN ----
  const login = async (email, password) => {
    const response = await Axios.post("/auth/login", { email, password });
    if (!response) return null;

    const { accessToken, user } = response.data;
    setSession(accessToken, user);
    authDispatch({
      type: ACTIONS.LOGIN,
      payload: { user },
    });
  };

  //! --- REGISTER ---
  const register = async (name, email, password) => {
    const response = await Axios.post("/auth/register", {
      name,
      email,
      password,
    });
    if (!response) return null;

    const { accessToken, user } = response.data;
    setSession(accessToken, user);
    authDispatch({
      type: ACTIONS.REGISTER,
      payload: { user },
    });
  };

  // !--- LOGOUT ----
  const logout = async () => {
    authDispatch({ type: ACTIONS.LOGOUT });
    setSession(null);
  };

  useEffect(() => {
    // !-- this function checks the users authentication everytime he changes the page
    const intialize = () => {
      const accessToken = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");

      if (accessToken) {
        if (!state.user) {
          authDispatch({
            type: ACTIONS.INTIALIZE,
            payload: {
              isAuthenticated: true,
              user: user ? JSON.parse(user) : {},
            },
          });
        }
      } else {
        authDispatch({
          type: ACTIONS.INTIALIZE,
          payload: { isAuthenticated: false, user: null },
        });
      }
    };
    intialize();
  }, [window.location.pathname]);

  return (
    <authContext.Provider
      value={{ ...state, authDispatch, login, logout, register }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(authContext);
