import {
  Box,
  Button,
  Center,
  CircularProgress,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCustomToast } from "../../hooks/useCustomToast";
import { BiFootball } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { SlGameController } from "react-icons/sl";
import { MdShoppingBasket } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import {
  MdOutlineScience,
  MdWorkOutline,
  MdOutlineSchool,
} from "react-icons/md";
import { BsFillPatchPlusFill, BsFillPersonFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { VscLaw } from "react-icons/vsc";
import { BiHappyAlt } from "react-icons/bi";
import "./interests.scss";

export default function Interets() {
  const { openCustomToast } = useCustomToast();
  const [interests, setInterests] = useState(interestsData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
      openCustomToast("Welcome to DiGrow", "success");
    }, 2500);
  };

  return (
    <VStack spacing={10}>
      <Box>
        <Heading my={4} textAlign="center" mt={6}>
          What are you interested in?
        </Heading>
        <Text textAlign="center">
          Select one or more topics that you are interested in. We will use this
          information to personalize your experience.
        </Text>
      </Box>

      {loading ? (
        <Center my={12}>
          <VStack>
            <CircularProgress isIndeterminate color="#725A7A" />
            <Text fontSize="xl" fontWeight="semibold" color="#725A7A">
              Loading Awesomeness...
            </Text>
          </VStack>
        </Center>
      ) : (
        <>
          <SimpleGrid marginBottom="30px" columns={5} gap={4}>
            {interests.map((interest, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    const newInterests = [...interests];
                    newInterests[index].selected =
                      !newInterests[index].selected;
                    setInterests(newInterests);
                  }}
                  _hover={{ bgColor: "#c56c86", color: "white" }}
                  bgColor={interest.selected ? "#c56c86" : ""}
                  color={interest.selected ? "white" : ""}
                >
                  <HStack>
                    {interest.icon}
                    <Text>{interest.name}</Text>
                  </HStack>
                </Button>
              );
            })}
          </SimpleGrid>
          <div className="footer">
            <HStack w="full" justify="end" spacing={2}>
              <Button
                onClick={() => {}}
                as={Link}
                to="/dashboard"
                colorScheme="gray"
              >
                Skip
              </Button>
              <Button
                onClick={handleClick}
                bg="#725a7a"
                color="white"
                _hover={{
                  bg: "#725a7a",
                }}
              >
                Continue
              </Button>
            </HStack>
          </div>
        </>
      )}
    </VStack>
  );
}

const interestsData = [
  {
    name: "Music",
    icon: <BsMusicNote />,
    selected: false,
  },
  {
    name: "Sports",
    icon: <BiFootball />,
    selected: false,
  },
  {
    name: "Technology",
    icon: <GiTechnoHeart />,
    selected: false,
  },
  {
    name: "Fitness",
    icon: <BiFootball />,
    selected: false,
  },
  {
    name: "Gaming",
    icon: <SlGameController />,
    selected: false,
  },
  {
    name: "Marketting",
    icon: <MdShoppingBasket />,
    selected: false,
  },
  {
    name: "Programming",
    icon: <BsCodeSlash />,
    selected: false,
  },
  {
    name: "Science",
    icon: <MdOutlineScience />,
    selected: false,
  },
  {
    name: "Education",
    icon: <MdOutlineSchool />,
    selected: false,
  },
  {
    name: "Self Improvement",
    icon: <BsFillPatchPlusFill />,
    selected: false,
  },
  {
    name: "Health",
    icon: <GiHealthNormal />,
    selected: false,
  },
  {
    name: "Culture",
    icon: <IoIosPeople />,
    selected: false,
  },
  {
    name: "Lifestyle",
    icon: <BsFillPersonFill />,
    selected: false,
  },
  {
    name: "Work",
    icon: <MdWorkOutline />,
    selected: false,
  },
  {
    name: "Books",
    icon: <ImBooks />,
    selected: false,
  },
  {
    name: "Polytics",
    icon: <VscLaw />,
    selected: false,
  },
  {
    name: "Humor",
    icon: <BiHappyAlt />,
    selected: false,
  },
];
