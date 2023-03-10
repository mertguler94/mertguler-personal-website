import profile from "../../public/mert.jpg";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../util/social";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center gap-10"
    >
      <div className="flex justify-center flex-col gap-10 w-3/5">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-9xl my-4">
            Hey, I&apos;m <strong className="text-[#4fadfd]">Mert!</strong>
          </h1>
          <h2 className="text-5xl my-4">
            <i className="text-[#82b556]">Front End Developer</i> from Toronto!
          </h2>
          <p className="leading-8 text-xl">
            Hello (or <strong>Merhaba</strong> as in Turkish), welcome to my
            personal website.
          </p>
          <p className="leading-8 text-xl">
            A highly motivated Front-End React.js Developer with experience
            using React, TypeScript, Next.js, and Tailwind. Delivers
            high-quality, responsive and progressive web applications that meet
            user and business needs with strong problem-solving skills.
          </p>
        </div>
        {/* social media icons */}
        <div className="flex gap-10">
          {socialLinks.map((social) => (
            <Link key={social.id} href={social.href} target="_blank">
              <social.icon size={48} className="hover:text-[#4fadfd]" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={profile}
          alt="A photograph of Mert Guler"
          className="rounded-full border-[6px] border-white w-4/5"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
