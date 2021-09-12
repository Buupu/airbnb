import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Box pt={6}>
      <Heading as="h2" fontWeight="medium" pb={5} fontSize="x-large">
        {heading}
      </Heading>
      {children}
    </Box>
  );
}
