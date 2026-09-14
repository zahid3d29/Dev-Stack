import Logo from "../assets/img/logo-text.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">

        <div className="grid h-16 grid-cols-3 items-center md:flex md:h-20">

          <div className="flex items-center md:w-1/4">

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>

  
            <a href="#" className="hidden md:block">
              <img src={Logo} alt="Logo" className="h-auto w-28" />
            </a>
          </div>

  
          <div className="flex justify-center md:hidden">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-auto w-24" />
            </a>
          </div>


          <nav className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center gap-8 text-sm text-gray-700">
              <li>
                <a
                  href="#"
                  className="font-semibold text-green-500 transition hover:text-green-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-500">
                  Technology
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-500">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-500">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>


          <div className="flex items-center justify-end gap-1.5 md:w-1/4 md:gap-3">
            {/* Login */}
            <button
              type="button"
              className="
                rounded-md
                px-2
                py-1.5
                text-[10px]
                font-medium
                text-gray-700
                transition
                hover:bg-gray-100

                sm:px-3
                sm:text-xs

                md:px-3
                md:py-2
                md:text-sm
              "
            >
              Login
            </button>

            {/* Sign Up */}
            <button
              type="button"
              className="
                rounded-full
                bg-green-500
                px-2.5
                py-1.5
                text-[9px]
                font-semibold
                text-white
                transition
                hover:bg-green-600

                sm:px-3
                sm:text-[10px]

                md:px-4
                md:py-2
                md:text-sm
              "
            >
              Sign Up
            </button>
          </div>
        </div>


        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out md:hidden
            ${menuOpen ? "max-h-[400px] pb-4" : "max-h-0"}
          `}
        >
          <nav className="rounded-xl border border-gray-100 bg-gray-50 p-2">
            <ul className="space-y-1">
              {/* Home */}
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    bg-green-50
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-green-500
                    transition
                    hover:bg-green-100
                  "
                >
                  Home
                </a>
              </li>

              {/* Technology */}
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    text-gray-700
                    transition
                    hover:bg-white
                  "
                >
                  Technology
                </a>
              </li>

              {/* Projects */}
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    text-gray-700
                    transition
                    hover:bg-white
                  "
                >
                  Projects
                </a>
              </li>

              {/* About */}
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    text-gray-700
                    transition
                    hover:bg-white
                  "
                >
                  About
                </a>
              </li>

              {/* Contact */}
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    text-gray-700
                    transition
                    hover:bg-white
                  "
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
