import {
  Box,
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  Avatar,
  Text,
  Button,
  Textarea,
  Flex,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import "./dashboard.scss";
import { useAuth } from "../../hooks/useAuth";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();
  const { user } = useAuth();
  return (
    <Box className="dashboard">
      <div className="left">
        <div className="logo">
          <img src="/images/dark-logo.png" alt="digrow" width="120px" />
        </div>
        <div className="user">
          <Avatar size="lg" src="https://bit.ly/ryan-florence" />
          <Text fontWeight="bold">{user.name || "user"}</Text>
          <Text>{user.email || "example@gmail.com"}</Text>
        </div>
        <div className="links">
          <NavLink to="/dashboard" className="link">
            <RxDashboard />
            <Text marginLeft={4}>Dashboard</Text>
          </NavLink>
          <div className="link">
            <IoStatsChartOutline />
            <Text marginLeft={4}>Statistics</Text>
          </div>
          <div className="link">
            <IoIosPeople />
            <Text marginLeft={4}>Audience</Text>
          </div>
          <div className="link">
            <BiBookAlt />
            <Text marginLeft={4}>Reports</Text>
          </div>
          <div className="link">
            <AiOutlineHistory />
            <Text marginLeft={4}>History</Text>
          </div>
          <div className="link">
            <MdSupportAgent />
            <Text marginLeft={4}>Support</Text>
          </div>
        </div>
        <div onClick={logout} className="logout">
          <BiLogOut />
          Logout
        </div>
      </div>
      <div className="right">
        <Flex w="full" justify="space-between" align="center">
          <Heading fontSize="3xl" fontWeight="semibold" alignSelf="start" p={4}>
            Dashboard
          </Heading>
          <Box display="flex" gap={4} alignItems={"center"} p={2}>
            <InputGroup w="100px">
              <Input
                focusBorderColor="#355C7D"
                bgColor={"#355C7D"}
                color={"white"}
                placeholder="Search "
                _placeholder={{
                  opacity: 1,
                  color: "#d6d6d6",
                  fontFamily: "Montserrat",
                }}
                fontSize={".8rem"}
              />
              <InputRightElement
                children={<BsSearch fontSize="1rem" color="white" />}
              />
            </InputGroup>
            <IoNotifications fontSize="1.5rem" color="#355C7D" />
          </Box>
        </Flex>

        <Heading fontSize="xl" fontWeight="semibold" textAlign="center">
          What Are You Looking For ?
        </Heading>

        <InputGroup rounded="2xl" my={4} mx="auto" w="xl">
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch fontSize="1rem" color="white" />}
          />
          <Input
            focusBorderColor="#355C7D"
            bgColor={"#355C7D"}
            color={"white"}
            placeholder="Search for subjects"
            _placeholder={{
              opacity: 1,
              color: "#d6d6d6",
              fontFamily: "Montserrat",
            }}
            fontSize={"1rem"}
          />
        </InputGroup>
        <Textarea
          borderColor="#355C7D"
          focusBorderColor="#355C7D"
          mt={4}
          w="xl"
          placeholder="Enter the description"
        />
        <button className="generateBtn">Generate</button>
        <div className="trends">
          Don't have specific topic in mind? <span>Generate Trends</span>
        </div>
      </div>
    </Box>
  );
}
