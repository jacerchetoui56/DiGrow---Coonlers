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
          <div className="link">
            <RxDashboard />
            <Text marginLeft={4}>Dashboard</Text>
          </div>
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
        <Heading fontSize="3xl" fontWeight="semibold" alignSelf="start" p={4}>
          Dashboard
        </Heading>

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
