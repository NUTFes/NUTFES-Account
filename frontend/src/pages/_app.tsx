import "@/styles/globals.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Layout } from "@/components/layout";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 660, // default: 600
        md: 900,
        lg: 1024, // default: 1200
        xl: 1536,
      },
    },
  });
  return (
    <SessionProvider session={session as Session | null | undefined}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
