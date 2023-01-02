import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Mert Guler</title>
        <meta name="description" content="A personal portfolio of Mert Guler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-24 bg-gray-800 text-white">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
