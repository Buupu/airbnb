import { MediumCardProps } from "../modal/CardProps";
import { Box, Heading, AspectRatio } from "@chakra-ui/layout";
import Image from "next/image";

export default function MediumCard({ img, title }: MediumCardProps) {
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
        <Image src={img} layout="fill" />
      </AspectRatio>
      <Heading mt={3} fontSize="lg" fontWeight="medium">
        {title}
      </Heading>
    </Box>
  );
}
