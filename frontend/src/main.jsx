import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/authContext";
import "./index.css";
// import store from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <ChakraProvider>
          <App />
        </ChakraProvider>
        {/* </Provider> */}
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
