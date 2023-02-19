import { Container, Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "../footer/Footer";
// import Header from "../header/Header";

export default function MainLayout({ children }) {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, #D1D4D8, #D6E4EB)">
      {/* <Header /> */}
      <Container maxW="full" m={0} p={0}>
        {/* <Header /> */}
        <div>{children ? children : <Outlet />}</div>
        {/* <Footer /> */}
      </Container>
    </Box>
  );
}
