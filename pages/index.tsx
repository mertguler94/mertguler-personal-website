import { Inter } from "@next/font/google";
import About from "../src/components/about";
import Portfolio from "../src/components/portfolio";
import Contact from "../src/components/contact";
import Hero from "../src/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
