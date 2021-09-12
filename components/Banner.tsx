import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
export default function Banner() {
  return (
    <Box
      position="relative"
      height={["300px", "400px", "500px", "600px", "650px"]}
    >
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <Box position="absolute" top="50%" w="full" textAlign="center" >
        <Text fontSize={["large", "medium"]} fontWeight="bold">
          Not sure where to go? Perfect.
        </Text>
        <Button
          color="purple.500"
          bg="white"
          px={6}
          py={4}
          boxShadow="md"
          borderRadius="full"
          fontWeight="bold"
          my={3}
          _hover={{ boxShadow: "lg" }}
          _active={{ transform: "scale(0.9)" }}
          _focus={{ outline: "none" }}
          transition="0.15s"
        >
          I'm flexible
        </Button>
      </Box>
    </Box>
  );
}
