import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm();
  const submit = async (values) => {
    try {
      await login(values.email, values.password);
      navigate("/dashboard");
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
      <VStack mb="8" spacing={2} align={["start", "center"]} w="full">
        <Heading>Login</Heading>
        <Text>Please login with your email and password</Text>
      </VStack>
      <form onSubmit={handleSubmit(submit)}>
        <VStack spacing={4}>
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
          <HStack w="full" my="2" justify={"space-between"}>
            <Checkbox>Remember me</Checkbox>
            <Button as="a" variant="link" colorScheme="blue">
              Forgot Password?
            </Button>
          </HStack>
          <Button
            type="submit"
            isLoading={isSubmitting}
            w="full"
            colorScheme="blue"
          >
            Login
          </Button>
          <Button as={Link} to="/signin" w="full" colorScheme="green">
            Create an account
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
