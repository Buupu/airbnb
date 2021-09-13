import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  useStyleConfig,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import { format } from "date-fns";
import { InfoCardProps } from "../modal/CardProps";
import InfoCard from "../components/InfoCard";

export default function Search({
  searchResults,
}: {
  searchResults: InfoCardProps[];
}) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  console.log(searchResults);
  const formattedStartDate = format(
    new Date(startDate.toString()),
    "dd MMMM yy"
  );

  const formattedEndDate = format(new Date(endDate.toString()), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const styles = useStyleConfig("Filter");
  return (
    <Box>
      <Head>
        <title>Find your perfect stay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <Box maxW="1200px" margin="auto" px={6} py={10}>
        <Text fontSize="sm">
          300+ stays | {range} | {numberOfGuests} guests
        </Text>
        <Heading fontSize="x-large" mt={2} mb={6}>
          Stays in {location}
        </Heading>
        <HStack display={["none", "none", "flex"]} spacing={4}>
          <Box __css={styles}>Cancellation Flexibity</Box>
          <Box __css={styles}>Type of Place</Box>
          <Box __css={styles}>Price</Box>
          <Box __css={styles}>Rooms and Beds</Box>
          <Box __css={styles}>More filters</Box>
        </HStack>
        <VStack mt={8} spacing={[1, 1, 0]}>
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={`info-card-${img}`}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </VStack>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return { props: { searchResults } };
}
