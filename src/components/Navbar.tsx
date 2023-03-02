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
    <header className="h-20 sticky top-0">
      <nav
        className={`${
          sticky ? "bg-black opacity-90" : "bg-transparent"
        } border-gray-200 px-48 py-2.5 w-full  transition-all ease-in-out z-10
        duration-300`}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span
            onClick={() => document.getElementById("body")!.scrollIntoView()}
            className="self-center text-3xl font-semibold whitespace-nowrap cursor-pointer "
          >
            MertGuler
          </span>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
              <li>
                <span
                  onClick={() =>
                    document.getElementById("body")!.scrollIntoView()
                  }
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                  aria-current="page"
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    document.getElementById("about")!.scrollIntoView()
                  }
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                >
                  About
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    document.getElementById("portfolio")!.scrollIntoView()
                  }
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white  hover:text-white cursor-pointer"
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    document.getElementById("contact")!.scrollIntoView()
                  }
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-300 md:hover:text-white cursor-pointer  hover:text-white"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
