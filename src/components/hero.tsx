import Image from "next/image";
import profile from "../../public/mert.jpg";
import Link from "next/link";
import { socialLinks } from "../util/social";
import { motion } from "framer-motion";

function Hero() {
  const interests = [
    { icon: "🪁", label: "Full Stack Developer" },
    { icon: "🧭", label: "Tech Explorer" },
    { icon: "☕", label: "Coffee Enthusiast" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-12 px-margin text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-block px-4 py-1.5 bg-surface-container-high text-primary rounded-full text-sm mb-4 border border-primary/20">
          Welcome to my corner
        </div>

        <h1 className="font-heading text-h1 text-on-surface md:text-6xl max-w-3xl mx-auto">
          Hi, I&apos;m <span className="italic text-primary">Mert</span>, and I&apos;m glad you&apos;re here.
        </h1>

        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          This is a space where I share my explorations in web development, my love for building great user experiences, and the small things that spark curiosity in my daily life.
        </p>

        <div className="pt-8 flex flex-wrap justify-center gap-4">
          {interests.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30 text-on-surface"
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 w-full max-w-2xl px-6"
      >
        <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 group border border-white/5">
          <Image
            src={profile}
            alt="A photograph of Mert Guler"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-8 mt-12"
      >
        {socialLinks.map((social) => (
          <Link
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
          >
            <social.icon size={20} />
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
