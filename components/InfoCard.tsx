import { InfoCardProps } from "../modal/CardProps";
import { AspectRatio, Flex, Heading, Text, Icon, Box } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: InfoCardProps) {
  return (
    <Flex
      w="100%"
      px={3}
      py={[3, 3, 5]}
      borderRadius="xl"
      cursor="pointer"
      _hover={{ opacity: 0.8, boxShadow: "lg" }}
      transition="0.2s ease-out"
      _first={{ borderTop: "1px", borderColor: "blackAlpha.200" }}
      borderBottom="1px"
      borderColor="blackAlpha.200"
      flexDirection={["column", "column", "row"]}
    >
      <AspectRatio
        position="relative"
        ratio={8 / 5}
        w={["100%", "100%", "320px"]}
        borderRadius="xl"
        overflow="hidden"
        mb={[2, 3, 0]}
      >
        <Image src={img} layout="fill" objectFit="cover" />
      </AspectRatio>
      <Flex flexDirection="column" flex={1} ml={[0, 0, 3]} justify="center">
        <Flex justify="space-between">
          <Text color={"blackAlpha.400"} fontSize="md" fontWeight="semibold">
            {location}
          </Text>
          <Icon as={FiHeart} />
        </Flex>
        <Heading as="h2" fontWeight="semibold" fontSize="xl" mt={1} mb={3}>
          {title}
        </Heading>
        <Text flex={1} fontSize="sm" color={"blackAlpha.700"}>
          {description}
        </Text>
        <Heading textAlign="right" as="h2" fontWeight="semibold" fontSize="xl">
          {price}
        </Heading>
        <Flex align="flex-end" justify="space-between">
          <Flex align="center">
            <Icon as={IoIosStar} mr={1} color="red.300" />
            <Text fontSize="sm">{star}</Text>
          </Flex>
          <Text fontSize="sm" color={"blackAlpha.600"} mt={2}>
            {total}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
