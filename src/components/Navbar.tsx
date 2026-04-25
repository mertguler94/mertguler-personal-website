import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-sm shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-8 md:px-24 py-6 max-w-7xl mx-auto">
        <a className="text-2xl font-heading italic text-primary" href="#">
          Mert Guler
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-on-surface-variant">
          <button
            onClick={() => scrollToElement("story")}
            className="hover:text-primary transition-all duration-300"
          >
            Story
          </button>
          <button
            onClick={() => scrollToElement("thoughts")}
            className="hover:text-primary transition-all duration-300"
          >
            Thoughts
          </button>
          <button
            onClick={() => scrollToElement("contact")}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold active:scale-95 transition-transform hover:brightness-110"
          >
            Say Hello
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;