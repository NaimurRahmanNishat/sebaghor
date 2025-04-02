import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { ChevronDown, CircleUser } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
  const handleLanguageClick = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };



  return (
    <>
      <header className="h-20 shadow flex items-center justify-between">
        <div className="max-w-screen-xl container mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link to="/" className="hover:scale-105 cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>
            {/* desktop menu */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-5">
              <li onClick={() => { setIsOpen(false); setIsLanguageOpen(false); }} className="relative">
                  <NavLink
                    to="/doctor"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 font-semibold relative"
                        : "hover:text-red-600"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Doctor
                        {isActive && (
                          <span className="absolute left-0 -bottom-8 w-full h-[3px] rounded bg-red-600"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
                <li onClick={() => { setIsOpen(false); setIsLanguageOpen(false); }} className="relative">
                  <NavLink
                    to="/hospital"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 font-semibold relative"
                        : "hover:text-red-600"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Hospital
                        {isActive && (
                          <span className="absolute left-0 -bottom-8 w-full h-[3px] rounded bg-red-600"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
                <li onClick={() => { setIsOpen(false); setIsLanguageOpen(false); }} className="relative">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 font-semibold relative"
                        : "hover:text-red-600"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Seba Blog
                        {isActive && (
                          <span className="absolute left-0 -bottom-8 w-full h-[3px] rounded bg-red-600"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
                <li
                  className="relative flex items-center gap-1 cursor-pointer"
                  onClick={handleClick}
                >
                  Registration{" "}
                  <span className="pt-1">
                    <ChevronDown />
                  </span>
                  {isOpen && (
                    <div className="bg-white shadow-2xl rounded-sm absolute z-10 top-14 right-0 w-72 py-2">
                      <ul className="flex flex-col px-4 gap-2">
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/hospital">
                            Hospital Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/doctor">
                            Doctor Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/agent">
                            Agents Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/diagnostic">
                            Diagnostic Center Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/insurance">
                            Insurance Company Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer hover:text-red-600">
                          <NavLink to="/registration/nurse">
                            Nurse Registration
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="relative flex items-center gap-1 cursor-pointer"
                  onClick={handleLanguageClick}
                >
                  <CircleUser /> <span>EN</span>
                  {isLanguageOpen && (
                    <div className="bg-green-400 text-gray-800 shadow-xl absolute top-8 right-0 w-20 py-2 z-10">
                      <ul className="flex flex-col px-2 gap-2">
                        <li className="flex items-center gap-1 cursor-pointer hover:text-red-600">
                          <CircleUser />
                          EN
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-red-600">
                          <CircleUser />
                          BN
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-red-600">
                          <CircleUser />
                          FR
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <Link to="/login">
                  <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                    Login
                  </Button>
                </Link>
              </ul>
            </nav>
            {/* mobile menu */}
            <div className="md:hidden flex">
              <button>
                <MobileMenu/>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
