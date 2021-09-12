import { DestinationModal } from "../modal/Destination";
import { VStack, Box, Heading, AspectRatio } from "@chakra-ui/layout";
import Image from "next/image";

export default function MediumCard({
  destination,
}: {
  destination: DestinationModal;
}) {
  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
      transition="0.3s ease-out"
      borderRadius="lg"
      p={2}
      width={["260px", "260px", "100%"]}
    >
      <AspectRatio
        position="relative"
        ratio={1 / 1}
        width={["260px", "260px", "100%"]}
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={destination.img} layout="fill" />
      </AspectRatio>
      <Heading mt={3} fontSize="14px">
        {destination.title}
      </Heading>
    </Box>
  );
}
