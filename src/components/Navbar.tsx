import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 72 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="h-20">
      <nav
        className={`${
          sticky ? "bg-black opacity-90" : "bg-transparent"
        } border-gray-200 px-48 py-2.5 w-full fixed top-0 transition-all ease-in-out 
        duration-300`}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="#hero" className="flex items-center" scroll={false}>
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              MertGuler
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
              <li>
                <Link
                  href="#hero"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white  hover:text-white"
                  aria-current="page"
                  scroll={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white  hover:text-white"
                  scroll={false}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white  hover:text-white"
                  scroll={false}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white  hover:text-white"
                  scroll={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
