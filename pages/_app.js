import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Muhammad Mehdi Ali Portfolio</title>
        <meta
          name="description"
          content="Muhammad Mehdi Ali's portfolio website created using NextJS, TailwindCSS and Sanity.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
