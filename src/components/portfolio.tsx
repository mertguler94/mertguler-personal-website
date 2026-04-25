import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const garden = [
    {
      name: "mertguler94",
      description:
        "A personal project I built to scratch my own itch. Still growing.",
    },
    {
      name: "petstagram",
      description:
        "Instagram, but make it fur. A photo-sharing app built just for pets.",
    },
    {
      name: "express-functions-todo",
      description:
        "A todo app with a backend backbone — built with Express and deployed on Firebase Functions.",
    },
    {
      name: "hangman-react",
      description:
        "The classic word game, rebuilt in React. Simple, clean, nostalgic.",
    },
  ];

  return (
    <section id="thoughts" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="font-heading text-h2 text-on-surface">Digital Garden</h2>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto">
            A collection of things I&apos;m currently working on, building, or exploring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {garden.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-surface-container-high p-8 rounded-[24px] shadow-lg hover:shadow-primary/20 hover:ring-2 hover:ring-primary/40 hover:ring-offset-2 transition-all border border-white/5"
            >
              <h3 className="font-heading text-h3 mb-4 text-on-surface">{item.name}</h3>
              <p className="text-on-surface-variant">{item.description}</p>
              <div className="mt-6 text-primary text-sm">View Project →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
