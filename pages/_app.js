import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Muhammad Mehdi Ali</title>
        <meta
          name="description"
          content="Muhammad Mehdi Ali's portfolio website created using NextJS, TailwindCSS and Sanity.io"
        />
        <meta
          name="keywords"
          content="Muhammad Mehdi Ali, Portfolio, NextJS, Tailwind, TailwindCSS, Sanityio, Sanity, React, ReactJS"
        />
        <meta name="author" content="Muhammad Mehdi Ali" />
        <meta name="theme-color" content="#228be6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider>
        <NotificationsProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
