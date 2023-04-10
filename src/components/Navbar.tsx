import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/use-window-dimensions";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const screen = useWindowDimensions();

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 72 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToElement(id: string, yOffset: number = -200) {
    const element = document.getElementById(id)!;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <header className="h-40 lg:h-20 sticky top-0 z-50">
      <nav
        className={`${
          sticky ? "bg-black opacity-90" : "bg-transparent"
        } border-gray-200 lg:px-48 p-8 lg:py-2.5 w-full relative transition-all ease-in-out z-50
        duration-300`}
      >
        <div className="container flex flex-wrap justify-between mx-auto">
          <span
            onClick={() => document.getElementById("body")!.scrollIntoView()}
            className="self-center text-3xl font-semibold whitespace-nowrap cursor-pointer "
          >
            MertGuler
          </span>
          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
          {true && (
            <div className="lg:block lg:w-auto" id="navbar-default">
              <ul className="flex justify-center items-center p-4 mt-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium   ">
                <li>
                  <span
                    onClick={() =>
                      document.getElementById("body")!.scrollIntoView()
                    }
                    className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToElement("about-title")}
                    className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                  >
                    About
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToElement("portfolio-title")}
                    className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-300 md:hover:text-white  hover:text-white cursor-pointer"
                  >
                    Portfolio
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => scrollToElement("contact-title")}
                    className="block py-2 pl-3 pr-4 rounded md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                  >
                    Contact
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
