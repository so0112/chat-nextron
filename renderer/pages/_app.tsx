import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
