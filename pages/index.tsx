import TopSection from "@components/TopSection";
import HiddenMenu from "@components/Header/HiddenMenu";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import TopAdvBnSection from "@components/TopAdvBnSection";
import HotKeyword from "@components/HotKeyword";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>자격증넷 | 자넷 누구나, 언제든 자격증이 궁금할땐?</title>
        <link rel="icon" href="/assets/headers/logo/favicon-32x32.png" />
      </Head>
      <Header />
      <HiddenMenu />
      <TopSection />
      <TopAdvBnSection />
      <HotKeyword />
    </>
  );
};

export default Home;
