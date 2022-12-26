import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <React.Fragment>
      <Head>홈페이지</Head>
      <NavBar />
    </React.Fragment>
  );
}

export default Home;
