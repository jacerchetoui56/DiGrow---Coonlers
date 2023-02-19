import { Avatar, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../context/authContext";

export default function Header() {
  const { logout, user } = useAuth();
  console.log(user);
  return (
    <Flex shadow="md" align="center" as="nav" p="1.5" justify="space-between">
      <Heading as="h3">Coonlers</Heading>

      <HStack spacing="2">
        <Avatar size="sm" />
        <Text>{user?.name || "user"}</Text>
        <Button onClick={logout} colorScheme="red">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
