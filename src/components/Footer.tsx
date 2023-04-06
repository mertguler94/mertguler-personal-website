import Link from "next/link";
import { socialLinks } from "../util/social";

function Footer() {
  return (
    <footer className="p-10 bg-gray-700 flex justify-center">
      <div className="flex sm:items-center sm:justify-between items-center flex-col gap-6 lg:gap-10">
        <div className="flex mt-4 space-x-6 lg:space-x-0 justify-center sm:mt-0">
          <div className="flex gap-10 justify-center">
            {socialLinks.map((social) => (
              <Link key={social.id} href={social.href} target="_blank">
                <social.icon
                  size={24}
                  className="text-gray-200 hover:text-[#4fadfd]"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="text-sm text-gray-400 text-center ">
            Made with ❤️
          </span>
          <span className="text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear().toString()}{" "}
            <Link href="/" className="hover:underline">
              Mert Guler
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
