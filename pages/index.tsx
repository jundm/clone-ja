import TopSection from "@components/TopSection";
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
      <TopSection />
    </>
  );
};

export default Home;
