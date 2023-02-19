import { Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "../footer/Footer";
// import Header from "../header/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="4xl">
        {/* <Header /> */}
        <div>{children ? children : <Outlet />}</div>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
