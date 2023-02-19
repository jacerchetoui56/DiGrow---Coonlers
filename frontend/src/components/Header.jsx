import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { logout, user } = useAuth();
  return (
    <Flex
      align="center"
      as="nav"
      p="1.5"
      px={12}
      py={4}
      justify="space-between"
    >
      <Image src="/images/dark-logo.png" alt="logo" width="150px" />
      <Menu>
        <MenuButton
          as={Avatar}
          src="https://bit.ly/ryan-florence"
          _hover={{ cursor: "pointer" }}
          size="sm"
          colorScheme="pink"
        ></MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <Avatar
                src="https://bit.ly/ryan-florence"
                marginRight="10px"
                size="sm"
              />
              {user?.name || "user"}
            </MenuItem>
            <MenuItem onClick={logout} color="red.500" fontWeight="semibold">
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
