import { Flex, HStack, Input, Icon, Avatar, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FiGlobe, FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <HStack
      position="sticky"
      top={0}
      zIndex={"50"}
      bg="white"
      boxShadow="md"
      py={4}
      px={[5, 8, 12]}
    >
      <Flex
        align="center"
        justify="center"
        pos="relative"
        h={30}
        cursor="pointer"
        margin="auto"
        w="100%"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb-logo"
        />
      </Flex>
      <Flex
        w="100%"
        borderRadius="full"
        border={["0", "2px"]}
        borderColor={["transparent", "gray.100"]}
        align="center"
        px={[0, 2]}
      >
        <Input
          border="none"
          focusBorderColor="none"
          flex={1}
          placeholder="Start your search"
          fontSize={14}
          px={[0, 2]}
        />
        <Icon
          as={HiOutlineSearch}
          p={1.5}
          h="30px"
          w="30px"
          color="white"
          bg="red.400"
          borderRadius="full"
          display={["none", "inline-block"]}
        />
      </Flex>
      <HStack
        w="100%"
        justify="flex-end"
        color="gray.500"
        spacing={["5px", "20px"]}
      >
        <Link display={["none", "inline-block"]}>Become a host</Link>
        <Icon cursor="pointer" h="20px" w="20px" as={FiGlobe} />
        <HStack
          borderRadius="full"
          border="2px"
          borderColor="gray.100"
          align="center"
          px={2}
          py={1}
          height="100%"
          spacing="10px"
        >
          <Icon h="25px" w="25px" cursor="pointer" as={FiMenu} />
          <Avatar h="25px" w="25px" cursor="pointer" />
        </HStack>
      </HStack>
    </HStack>
  );
}
