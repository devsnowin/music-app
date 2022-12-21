import type { AppProps } from "next/app";
import { NextPageContext } from "next/types";
import { ChakraProvider } from "@chakra-ui/react";
import "reset-css";

import theme from "../styles/theme";
import Layout from "../components/Layout";

interface CustomNextPageContext extends NextPageContext {
  authPath: Boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}
