import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsMounted(true);
  }, []);

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
          <div className={`${isDarkMode && "dark"}`}>
            {isMounted && (
              <div
                className={`min-h-screen transition-all dark:bg-darkblue dark:text-white`}
              >
                <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <Component {...pageProps} />
                <Footer />
              </div>
            )}
          </div>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

