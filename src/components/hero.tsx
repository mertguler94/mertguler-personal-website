import profile from "../../public/mert.jpg";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../util/social";
import Greeting from "./greeting";
import styles from "./hero.module.css";

function Hero() {
  const greeting = "Hey, I'm ".split("");
  const name = "Mert!".split("");

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:p-0 py-10"
    >
      <div className="flex justify-center flex-col gap-10 lg:w-3/5 w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="lg:text-9xl text-5xl my-4 flex z-10">
            {greeting.map((letter, idx) => (
              <Greeting key={idx} letter={letter} />
            ))}
            {name.map((letter, idx) => (
              <Greeting
                key={idx}
                letter={letter}
                className="text-[#4fadfd] font-bold"
              />
            ))}
          </div>
          {/* <h1 className=>
            Hey, I&apos;m <strong className="text-[#4fadfd]">Mert!</strong>
          </h1> */}
          <h2 className="lg:text-5xl text-3xl my-4 lg:text-left text-center">
            <i className="text-[#82b556]">Front End Developer</i> from Toronto!
          </h2>
          <p className="leading-8 text-xl lg:text-left text-center">
            Hello (or <strong>Merhaba</strong> as in Turkish), welcome to my
            personal website.
          </p>
          <p className="leading-8 text-xl lg:text-left text-center">
            A highly motivated Front-End React.js Developer with experience
            using React, TypeScript, Next.js, and Tailwind. Delivers
            high-quality, responsive and progressive web applications that meet
            user and business needs with strong problem-solving skills.
          </p>
        </div>
        {/* social media icons */}
        <div className="flex gap-10 lg:justify-start justify-center z-10">
          {socialLinks.map((social) => (
            <Link key={social.id} href={social.href} target="_blank">
              <social.icon
                size={48}
                className="hover:text-[#4fadfd] lg:scale-0 scale-75 z-0"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className={`flex justify-center w-fit rounded-full`}>
        <Image
          src={profile}
          alt="A photograph of Mert Guler"
          className={`rounded-full border-[6px] border-white`}
          priority
        />
      </div>

      {/* <div className="flex justify-center">
        <Image
          src={profile}
          alt="A photograph of Mert Guler"
          className="rounded-full border-[6px] border-white w-4/5"
          priority
        />
      </div> */}
    </section>
  );
}

export default Hero;
