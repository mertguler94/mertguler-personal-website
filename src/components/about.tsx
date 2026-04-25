import ViewResume from "./view-resume";
import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id="story" className="py-16 bg-surface-dim">
      <div className="max-w-3xl mx-auto px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-gutter mb-12"
        >
          <div className="h-[1px] flex-grow bg-white/10"></div>
          <h2 className="font-heading text-h2 text-primary whitespace-nowrap italic">
            The Story So Far
          </h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </motion.div>

        <div className="text-lg text-on-surface space-y-8 leading-relaxed first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          <p>
            I&apos;ve always believed the most interesting parts of a person
            aren&apos;t found in a resume. They&apos;re found in the quiet
            in-between moments&mdash;the rabbit holes you fall into at midnight,
            the problems you can&apos;t stop thinking about, the things you build
            just to see if you can.
          </p>
          <p>
            I started out in structural engineering, where I spent three years
            learning how to think carefully, measure twice, and never ignore the
            details that hold everything together. But somewhere along the way, I
            discovered that the thing I actually loved wasn&apos;t the structures
            themselves&mdash;it was the systems behind them. That realization
            led me to software.
          </p>
          <p>
            Since then, I&apos;ve been building things for the web. Front-end,
            back-end, cloud infrastructure, mobile&mdash;I&apos;m drawn to the
            full picture. I like understanding how the pieces connect, and I like
            making those connections feel effortless for the people using them.
          </p>
          <div className="p-8 bg-surface-container rounded-[24px] border-l-4 border-primary italic text-primary font-heading text-center">
            &quot;We are not human doings, we are human beings.&quot;
          </div>
          <p>
            When I&apos;m not at my desk, I&apos;m usually out on a hiking
            trail, trying a new recipe I have no business attempting, or getting
            lost in a good book. I&apos;m not here to impress you with a list
            of buzzwords. I&apos;m just here to do honest work and share a little
            of what I&apos;m learning along the way.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 hover:text-white text-primary border border-primary/20"
            onClick={openModal}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-surface-container rounded-full group-hover:bg-opacity-0">
              View Resume
            </span>
          </button>
          <ViewResume isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </section>
  );
}

export default About;