import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useAuth } from "../../hooks/useAuth";

export default function SignIn() {
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const { openCustomToast } = useCustomToast();

  const submit = async (values) => {
    try {
      await login(values.email, values.password);
    } catch (err) {
      console.log(err);
      openCustomToast(err.message || "Invalid email or password", "error");
    }
  };

  return (
    <Box className="container">
      <div className="brain">
        <Image src="/images/brain.png" alt="brain" />
      </div>
      <div className="left">
        <div className="logo">
          <Image src="/images/logo.png" alt="logo" w="140px" />
        </div>
        <HStack fontSize=".9rem" spacing={2}>
          <Text>DiGrow © 2023</Text>
          <Link to="/" className="link">
            Privacy Policy
          </Link>
          <Link to="/" className="link">
            Term of use
          </Link>
        </HStack>
      </div>
      <div className="right">
        <Box w="md">
          <VStack mb={10} spacing={2} align={"center"}>
            <Heading>Login</Heading>
          </VStack>
          <form onSubmit={handleSubmit(submit)}>
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  autoComplete="off"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  variant="flushed"
                  type="email"
                />
                <Text color="red.400" fontSize=".9rem">
                  {errors.email && errors.email.message}
                </Text>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    autoComplete="off"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    variant="flushed"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      variant={showPassword ? "solid" : "ghost"}
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text color="red.400" fontSize=".9rem">
                  {errors.password && errors.password.message}
                </Text>
              </FormControl>
              <Button
                type="submit"
                color="white"
                isLoading={isSubmitting}
                w="full"
                bgColor="#355c7d"
                _hover={{ bgColor: "#084170" }}
              >
                Login
              </Button>
              <HStack
                w="full"
                align="center"
                my="2"
                gap={1}
                justify={"flex-start"}
              >
                <Text>Didn't Join Yet ?</Text>
                <Button as={Link} to="/signup" variant="link" color="#355c7d">
                  Create An Account
                </Button>
              </HStack>
            </VStack>
          </form>
        </Box>
      </div>
    </Box>
  );
}
