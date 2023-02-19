import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Center
      w="full"
      minH="100vh"
      display="flex"
      justifyItems="center"
      alignItems="center"
      backgroundColor="gray.100"
    >
      <Spinner size="xl" />
    </Center>
  );
}
