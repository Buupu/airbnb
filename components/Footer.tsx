import { Box, Heading, Link, Stack } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Box w="100%" bg="gray.100" py={20} fontSize="sm">
      <Stack
        maxW="1400px"
        w={["60%", "60%", "90%"]}
        m="auto"
        flexDirection={["column", "column", "row"]}
        spacing={[12, 12, 0]}
        align="flex-start"
      >
        <Stack align="flex-start" flex={1}>
          <Heading as="h6" fontSize="sm">
            ABOUT
          </Heading>
          <Link>How Airbnb works</Link>
          <Link>Newsroom</Link>
          <Link>Investors</Link>
          <Link>Airbnb Plus</Link>
          <Link>Airbnb Luxe</Link>
        </Stack>
        <Stack align="flex-start" flex={1}>
          <Heading as="h6" fontSize="smd">
            COMMUNITY
          </Heading>
          <Link>Accessibility</Link>
          <Link>This is not a real site</Link>
          <Link>Just a clone</Link>
          <Link>Star me please</Link>
          <Link>Thanks</Link>
        </Stack>
        <Stack align="flex-start" flex={1}>
          <Heading as="h6" fontSize="smd">
            HOST
          </Heading>
          <Link>This is not a real site</Link>
          <Link>Just a clone</Link>
          <Link>Investors</Link>
        </Stack>
        <Stack align="flex-start" flex={1}>
          <Heading as="h6" fontSize="smd">
            SUPPORT
          </Heading>
          <Link>This is not a real site</Link>
          <Link>Just a clone</Link>
          <Link>Airbnb Luxe</Link>
        </Stack>
      </Stack>
    </Box>
  );
}
