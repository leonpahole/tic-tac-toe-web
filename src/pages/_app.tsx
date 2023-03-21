import { outfit } from "@/fonts";
import type { AppProps } from "next/app";
import Head from "next/head";
import Modal from "react-modal";

import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#modals");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className={`font-sans ${outfit.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
