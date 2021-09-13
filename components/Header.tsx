import {
  Flex,
  HStack,
  Input,
  Icon,
  Avatar,
  Link,
  Heading,
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineSearch, HiUsers } from "react-icons/hi";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { DateRangePicker, DateRange } from "react-date-range";
import { useRouter } from "next/dist/client/router";

export default function Header({ placeholder }: { placeholder?: string }) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: {
    selection: {
      startDate: React.SetStateAction<Date>;
      endDate: React.SetStateAction<Date>;
    };
  }) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
    setSearchInput("");
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={"50"}
      bg="white"
      boxShadow="md"
      py={4}
      px={[5, 8, 12]}
    >
      <Flex>
        <Flex
          align="center"
          justify="center"
          pos="relative"
          h={30}
          cursor="pointer"
          margin="auto"
          w="100%"
          onClick={() => router.push("/")}
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
            placeholder={placeholder || "Start your search"}
            fontSize={16}
            px={[0, 2]}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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
          <Link display={["none", "none", "none", "inline-block"]}>
            Become a host
          </Link>
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
            <Icon
              display={["none", "none", "block"]}
              h="25px"
              w="25px"
              cursor="pointer"
              as={FiMenu}
            />
            <Avatar h="25px" w="25px" cursor="pointer" />
          </HStack>
        </HStack>
      </Flex>
      {searchInput && (
        <Flex mt={3} justify="center">
          <Box>
            <Box display={["flex", "none"]}>
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            </Box>
            <Box display={["none", "flex"]}>
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            </Box>
            <Flex justify="space-between" align="center">
              <Heading as="h3" fontSize="md" fontWeight="medium">
                Number of Guests
              </Heading>
              <Flex align="center">
                <Icon as={HiUsers} h="22px" w="22px" mr={3} />
                <NumberInput
                  size="sm"
                  maxW={"60px"}
                  min={1}
                  max={20}
                  focusBorderColor="none"
                  value={numberOfGuests}
                  onChange={(value) => setNumberOfGuests(parseInt(value))}
                >
                  <NumberInputField color="red.500" />
                  <NumberInputStepper color="blackAlpha.600">
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </Flex>
            <Flex pt={3}>
              <Button
                flex={1}
                variant="ghost"
                color="blackAlpha.600"
                _hover={{ bgColor: "blackAlpha.50" }}
                _focus={{ outline: "none" }}
                onClick={resetInput}
              >
                Cancel
              </Button>
              <Button
                flex={1}
                variant="ghost"
                color="red.500"
                _hover={{ bgColor: "red.50" }}
                _focus={{ outline: "none" }}
                onClick={search}
              >
                Search
              </Button>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
