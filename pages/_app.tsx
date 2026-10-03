import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";

// Self-hosted so every OS renders the same typeface instead of falling back to
// San Francisco / Segoe UI / Roboto / DejaVu, which all have different widths.
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#242424" />
      </Head>
      <div className={geistSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
