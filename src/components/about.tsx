import { useState } from "react";
import Image from "next/image";
import about from "../../public/about.png";
import ViewResume from "./view-resume";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center flex-col gap-10"
    >
      <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white  ">
        About Me
      </h1>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center gap-10">
          <Image src={about} alt="Mock image" width={500} priority />
          <div className="flex flex-col gap-3 text-lg w-3/5">
            {/* TODO: make some sentences or words going forward. add some styles. */}
            <p>
              Hi there! I&apos;m Mert Guler, a front-end engineer with a passion
              for creating beautiful and intuitive web applications.{" "}
            </p>{" "}
            <p>
              I used to work as a structural engineer for 3 years before I
              realized my true calling was in software development. Since then,
              I&apos;ve been honing my skills in front-end engineering, working
              on various projects using cutting-edge technologies and
              frameworks.
            </p>
            <p>
              Currently, I&apos;m working on a mentorship platform that I&apos;m
              very excited about. It&apos;s been an amazing opportunity to
              combine my technical expertise with my desire to make a positive
              impact on people&apos;s lives.
            </p>
            <p>
              When I&apos;m not coding, you can usually find me exploring new
              hiking trails, experimenting with new recipes in the kitchen, or
              enjoying a good book.
            </p>
            <p>
              {" "}
              I believe that my experience in both engineering and software
              development gives me a unique perspective that allows me to
              approach problems in creative and innovative ways.
            </p>{" "}
            <p>
              I&apos;m always eager to take on new challenges and learn new
              skills, and I&apos;m excited about the possibilities that lie
              ahead. If you&apos;re interested in learning more about my work or
              have a project you&apos;d like to collaborate on, feel free to get
              in touch! I&apos;d love to hear from you. You can also check my
              resume from below.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-3 w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden
        text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800"
          onClick={openModal}
        >
          <span className="flex items-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            View Resume
          </span>
        </button>
        <ViewResume isOpen={isOpen} closeModal={closeModal} />
      </div>
    </section>
  );
}

export default About;
