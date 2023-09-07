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
      className="min-h-screen flex justify-center items-center flex-col lg:gap-10 gap-2 lg:p-0 py-10"
    >
      <h1
        id="about-title"
        className="mb-4 text-3xl lg:text-6xl tracking-tight font-extrabold text-center text-white  "
      >
        About Me
      </h1>
      <div className="flex justify-center items-center flex-col">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
          <Image src={about} alt="Mock image" width={500} priority />
          <div className="flex flex-col gap-3 text-lg lg:w-3/5 w-full">
            {/* TODO: make some sentences or words going forward. add some styles. */}
            {/*     */}
            <p>
              Hello, I&apos;m Mert Guler, a versatile Full Stack Developer with
              a background in structural engineering and a passion for crafting
              seamless and impactful web applications.
            </p>{" "}
            <p>
              With a foundation in structural engineering, I spent three years
              gaining problem-solving skills and a meticulous attention to
              detail. However, my true calling emerged in the world of software
              development. Over the years, I&apos;ve dedicated myself to
              mastering the intricacies of both front-end and back-end
              technologies, utilizing cutting-edge tools and frameworks to bring
              innovative ideas to life.
            </p>
            <p>
              My current focus revolves around a thrilling project: a platform
              like Uber for car detailers, that bridges my technical prowess
              with my commitment to enhancing people&apos;s lives. This endeavor
              has allowed me to combine my skills in React.js, Next.js,
              Firebase, Node.js, and more, resulting in a dynamic and impactful
              solution.
            </p>
            <p>
              When I&apos;m not coding, you can usually find me exploring new
              hiking trails, experimenting with new recipes in the kitchen, or
              enjoying a good book.
            </p>
            <p>
              {" "}
              My unique blend of engineering and software development experience
              enables me to tackle challenges with a creative and innovative
              mindset.
            </p>{" "}
            <p>
              I thrive on embracing fresh opportunities, acquiring new skills,
              and am enthusiastic about the limitless potential that lies ahead.
              If you&apos;re interested in discussing my work, exploring
              potential collaborations, or simply connecting, please don&apos;t
              hesitate to reach out. I&apos;m eager to hear from you and excited
              about the exciting journeys we can embark on together. You can
              reach out to me if you need my resume.
            </p>
          </div>
        </div>

        {/* <button
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
        <ViewResume isOpen={isOpen} closeModal={closeModal} /> */}
      </div>
    </section>
  );
}

export default About;
