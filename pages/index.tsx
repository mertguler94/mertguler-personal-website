import Head from "next/head";
import About from "../src/components/about";
import Portfolio from "../src/components/portfolio";
import Contact from "../src/components/contact";
import Hero from "../src/components/hero";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Home() {
  const [isGoTopShown, setIsGoTopShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 200 ? setIsGoTopShown(true) : setIsGoTopShown(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Mert Guler</title>
        <meta name="description" content="A personal portfolio of Mert Guler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />

      {isGoTopShown && (
        <BsFillArrowUpCircleFill
          size={48}
          className="fixed bottom-8 right-8 cursor-pointer hover:text-primary transition-all"
          onClick={() => window.scrollTo(0, 0)}
        />
      )}
    </>
  );
}