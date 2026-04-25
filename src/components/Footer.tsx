import Link from "next/link";
import { socialLinks } from "../util/social";

function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-20 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <span className="font-heading text-xl italic text-primary">
            Mert Guler
          </span>
          <p className="text-base text-on-surface-variant mt-2">
            Handcrafted with intention © 2026
          </p>
        </div>

        <div className="flex gap-8 text-sm text-on-surface-variant">
          <Link href="#story" className="hover:text-primary transition-colors duration-300">
            Story
          </Link>
          <Link href="#thoughts" className="hover:text-primary transition-colors duration-300">
            Thoughts
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors duration-300">
            Let&apos;s Chat
          </Link>
        </div>

        <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;