import HiddenMenu from "@components/Header/HiddenMenu";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HiddenMenu />
      <div>body</div>
    </>
  );
};

export default Home;
