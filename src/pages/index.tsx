import { type NextPage } from "next";
import Head from "next/head";
import { Navbar, SideBar } from "../components";

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

        <SideBar />
      </main>
    </>
  );
};

export default Home;
