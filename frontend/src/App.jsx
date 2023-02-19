import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import Loading from "./components/Loading";
import MainLayout from "./components/MainLayout";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const url = pathname.split("?")[0];
    const publicPaths = ["/login", "/signup", "/"];
    if (!user && !isAuthenticated && !publicPaths.includes(url)) {
      navigate("/");
    } else if (!user && !isAuthenticated && publicPaths.includes(url)) {
      // navigate(url);
    } else if (user && isAuthenticated && url === "/login") {
      navigate("/dashboard");
    } else if (user && isAuthenticated && url === "/signup") {
      navigate("/interests");
    }
    //eslint-disable-next-line
  }, [pathname, user, isAuthenticated]);

  // !--------- using useRoutes hook -------------
  // * defining the lazy load components
  const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
  const Login = lazy(() => import("./pages/Login/Login"));
  const SignUp = lazy(() => import("./pages/Signup/SignUp"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  const Interets = lazy(() => import("./pages/interests/Interets"));
  const Home = lazy(() => import("./pages/Home/Home"));

  const routes = useRoutes([
    {
      path: "/dashboard",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/interests",
      element: (
        <MainLayout>
          <Interets />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
}

export default App;
