import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function SignIn() {
  const { register: signUp } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm();
  const submit = async (values) => {
    try {
      await signUp(values.name, values.email, values.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      w={["full", "md"]}
      mx="auto"
      my={["10vh", 10]}
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      rounded="4"
      p={[8, 10]}
    >
      <div className="left">Hello</div>
      <VStack mb="8" spacing={2} align={["start", "center"]} w="full">
        <Heading>Sign Up</Heading>
        <Text>Please login with your email and password</Text>
      </VStack>
      <form onSubmit={handleSubmit(submit)}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
              variant="filled"
              type="text"
            />
            <Text color="red.400" fontSize=".9rem">
              {errors.name && errors.name.message}
            </Text>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              variant="filled"
              type="email"
            />
            <Text color="red.400" fontSize=".9rem">
              {errors.email && errors.email.message}
            </Text>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              variant="filled"
              type="password"
            />
            <Text color="red.400" fontSize=".9rem">
              {errors.password && errors.password.message}
            </Text>
          </FormControl>
          <HStack w="full" align="center" my="2" gap={1} justify={"flex-start"}>
            <Text>Already have an account ?</Text>
            <Button as={Link} to="/login" variant="link" colorScheme="blue">
              Login
            </Button>
          </HStack>
          <Button
            type="submit"
            isLoading={isSubmitting}
            w="full"
            colorScheme="blue"
          >
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
