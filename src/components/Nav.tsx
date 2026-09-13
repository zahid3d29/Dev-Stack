import Logo from "../assets/img/logo-text.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid h-16 grid-cols-3 items-center md:flex md:justify-between">
          <div className="flex items-center md:w-1/4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-700 hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>

          <div className="flex justify-center md:w-1/4 md:justify-start">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-auto w-24 md:w-28" />
            </a>
          </div>

          <ul className="hidden items-center gap-8 text-gray-700 md:flex">
            <li className="font-bold text-green-500">
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Technology</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex items-center justify-end gap-1.5 md:w-1/4 md:gap-4">
            <button
              className="
                px-2 py-1
                text-[11px]
                font-medium
                text-gray-700
                md:px-3
                md:py-2
                md:text-base
              "
            >
              Login
            </button>

            <button
              className="
                rounded-full
                bg-green-500
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-white
                hover:bg-green-600
                md:px-5
                md:py-2
                md:text-base
              "
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          className={`
            overflow-hidden transition-all duration-300 md:hidden
            ${menuOpen ? "max-h-96 pb-4" : "max-h-0"}
          `}
        >
          <nav className="rounded-xl border border-gray-100 bg-gray-50 p-3">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-white"
                >
                  Technology
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
