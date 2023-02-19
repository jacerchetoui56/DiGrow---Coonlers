import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./home.scss";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";

export default function Home() {
  return (
    <Container color="white" className="landing_page" minH="100vh" maxW="full">
      <Flex align="center" justify="space-between" w="full" px={16} py={4}>
        <Image src="/images/logo.png" alt="logo" w="150px" />
        <HStack spacing={10}>
          <Button
            _hover={{ bgColor: "transparent" }}
            variant="ghost"
            as={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            _hover={{ bgColor: "transparent" }}
            variant="ghost"
            as={Link}
            to="/blog"
          >
            Blog
          </Button>
          <Button
            _hover={{ bgColor: "transparent" }}
            variant="ghost"
            as={Link}
            to="/about"
          >
            About
          </Button>
        </HStack>
        <Button
          as={Link}
          to="/login"
          _hover={{ bgColor: "#c56c86" }}
          variant="solid"
          bgColor="#c56c86"
          borderRadius="3xl"
          px={8}
        >
          Login
        </Button>
      </Flex>
      <VStack
        mt="2.5rem"
        spacing={4}
        justify="center"
        align="start"
        minH="70vh"
        w="90%"
        mx="auto"
      >
        <Heading
          className="heading"
          fontSize="5xl"
          letterSpacing={1}
          lineHeight="1.1"
          textTransform="uppercase"
          mb={4}
        >
          It's Your Time, <br /> <span>Boost</span> your Business
        </Heading>
        <Text mt={4} maxW={["95%", "80%", "50%"]}>
          We trained a model called DiGrow to help you grow your business. It
          will help you to find the best way to grow your business. We trained a
          model called DiGrow to help you grow your business. It will help you.
        </Text>
        <Button
          _hover={{ bgColor: "#c56c86" }}
          variant="solid"
          bgColor="#c56c86"
          w="fit-content"
          py={6}
          px={8}
          borderRadius="3xl"
        >
          <HStack as={Link} to="/signup">
            <Text fontSize="xl" letterSpacing={1}>
              TRY DiGrow
            </Text>
            <RiExternalLinkLine fontSize="20px" />
          </HStack>
        </Button>
        <HStack>
          <HStack>
            <AvatarGroup size="md" max={3}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            </AvatarGroup>
          </HStack>
          <Text fontWeight="medium">
            And Other 1.5 Million Content Creators Have Already Joined
          </Text>
        </HStack>
      </VStack>
    </Container>
  );
}
