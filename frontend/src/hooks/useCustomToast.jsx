import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastContext = createContext();

const ToastProvider = ({ children }) => {
  const openCustomToast = (message, type) => {
    toast(message, {
      type: type,
      position: "bottom-center",
      autoClose: 3000,
      pauseOnHover: false,
    });
  };

  return (
    <toastContext.Provider value={{ openCustomToast }}>
      {children}
      <ToastContainer />
    </toastContext.Provider>
  );
};

export default ToastProvider;
export const useCustomToast = () => useContext(toastContext);
