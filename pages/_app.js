import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const progress = new ProgressBar({ size: 3, color: "#FE595E", delay: 100 });

const Filter = {
  baseStyle: {
    px: 3,
    py: 2,
    border: "1px",
    borderColor: "gray.100",
    borderRadius: "full",
    cursor: "pointer",
    fontSize: "sm",
    _hover: { boxShadow: "md" },
    _active: { transform: "scale(0.95)", bg: "gray.100" },
    transition: "0.15s ease-out",
  },
};

const theme = extendTheme({
  components: {
    Filter,
  },
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
