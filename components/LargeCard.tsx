import { Box, Heading, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function LargeCard() {
  return (
    <Box
      my={12}
      w="100%"
      h="360px"
      position="relative"
      borderRadius="xl"
      overflow="hidden"
    >
      <Image
        src="https://links.papareact.com/4cj"
        layout="fill"
        objectFit="cover"
      />
      <Box position="absolute" top="20%" left="50px" maxW="300px">
        <Heading as="h3" mb={1}>
          The Greatest Outdoors
        </Heading>
        <Text>Wishlist curated by Airbnb.</Text>
        <Button
          bg="gray.800"
          _hover={{ bgColor: "gray.900", color: "white" }}
          color="white"
          mt={3}
        >
          Get Insprired
        </Button>
      </Box>
    </Box>
  );
}
