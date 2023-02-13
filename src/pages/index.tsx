import { type NextPage } from "next";
import Head from "next/head";
import { Navbar, SideBar, TopBar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
        <meta name="description" content="E-Commerce App SPA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <TopBar />
        <SideBar />
      </main>
    </>
  );
};

export default Home;
