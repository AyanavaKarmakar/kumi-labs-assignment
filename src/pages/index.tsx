import { type NextPage } from "next";
import Head from "next/head";
import { ItemListContainer, Navbar, SideBar, TopBar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
        <meta name="description" content="E-Commerce App SPA" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <div className="flex flex-col gap-y-3 lg:hidden">
          <TopBar />
          <hr />
          {/* <ItemListContainer /> */}
        </div>

        <div className="hidden flex-row gap-x-[50px] lg:flex">
          <SideBar />
          <ItemListContainer />
        </div>
      </main>
    </>
  );
};

export default Home;
