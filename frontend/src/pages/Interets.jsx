import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCustomToast } from "../hooks/useCustomToast";
import { BiFootball } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { BsMusicNote } from "react-icons/bs";
import { SlGameController } from "react-icons/sl";

export default function Interets() {
  const { openCustomToast } = useCustomToast();
  const [interests, setInterests] = useState(interestsData);

  const handleSubmit = async () => {};

  return (
    <VStack>
      <Heading>Interests</Heading>
      <SimpleGrid columns={5} gap={4}>
        {interests.map((interest, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                const newInterests = [...interests];
                newInterests[index].selected = !newInterests[index].selected;
                setInterests(newInterests);
              }}
              _hover={{ bgColor: "green.400" }}
              bgColor={interest.selected ? "green.300" : ""}
            >
              <HStack>
                {interest.icon}
                <Text>{interest.name}</Text>
              </HStack>
            </Button>
          );
        })}
      </SimpleGrid>
      <Button
        onClick={() => {
          openCustomToast("Welcome", "success");
        }}
        as={Link}
        to="/dashboard"
        colorScheme="blue"
      >
        Skip
      </Button>
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
    icon: <GrTechnology />,
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
];
