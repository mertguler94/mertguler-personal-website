import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import CallToAction from "../src/components/CallToAction";
import Footer from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <CallToAction />
      </main>
    </>
  );
}
