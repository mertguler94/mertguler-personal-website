import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MG
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
              <li>
                <Link
                  href="#id"
                  className="block py-2 pl-3 pr-4 text-white rounded m md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white "
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white "
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