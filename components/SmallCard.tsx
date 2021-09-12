import { DestinationModal } from "../modal/Destination";
import { HStack, Box, Text } from "@chakra-ui/layout";
import Image from "next/image";

export default function SmallCard({
  destination,
}: {
  destination: DestinationModal;
}) {
  return (
    <HStack
      spacing={4}
      cursor="pointer"
      _hover={{ bg: "blackAlpha.100", transform: "scale(1.1)" }}
      transition="0.3s ease-out"
      borderRadius="md"
      p={2}
    >
      <Box
        position="relative"
        height="60px"
        width="60px"
        borderRadius="md"
        overflow="hidden"
      >
        <Image src={destination.img} layout="fill" />
      </Box>
      <Box>
        <Text>{destination.location}</Text>
        <Text color="blackAlpha.600" fontSize="14px">
          {destination.distance}
        </Text>
      </Box>
    </HStack>
  );
}
