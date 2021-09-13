import { ChakraProvider, theme } from "@chakra-ui/react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
