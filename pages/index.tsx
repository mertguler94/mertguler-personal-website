import { Inter } from "@next/font/google";
import About from "../src/components/about";
import Portfolio from "../src/components/portfolio";
import Contact from "../src/components/contact";
import Hero from "../src/components/hero";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <Hero />
      <About />
      <Portfolio />
      <Contact />

      {isGoTopShown && (
        <BsFillArrowUpCircleFill
          size={48}
          className="fixed bottom-8 right-8 cursor-pointer hover:text-[#4fadfd]"
          onClick={() => window.scrollTo(0, 0)}
        />
      )}
    </>
  );
}
