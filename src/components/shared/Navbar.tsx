import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { ChevronDown, CircleUser } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
  const handleLanguageClick = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <>
      <header className={`w-full fixed h-20 flex items-center justify-between transition-all translate-y-[-0px] duration-500 ease-in-out z-50 ${isScroll ? "bg-white shadow-lg" :  "bg-white shadow translate-y-[-0px]"}`}>
        <div className="max-w-screen-xl container mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="logo" className="w-44 h-16"/>
            </Link>
            {/* desktop menu */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-5">
                <li
                  onClick={() => {
                    setIsOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  className="relative font-bold font-primary text-simpleGreen"
                >
                  <NavLink
                    to="/doctor"
                    className={({ isActive }: { isActive: boolean }) =>
                      `font-primary font-bold relative group ${
                        isActive ? "text-simpleGreen" : "hover:text-simpleGreen"
                      }`
                    }
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <span className="relative inline-block">
                        Doctor
                        <span
                          className={`absolute left-0 -bottom-7 h-[4px] bg-simpleGreen rounded transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </span>
                    )}
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  className="relative font-bold font-primary text-simpleGreen"
                >
                  <NavLink
                    to="/hospital"
                    className={({ isActive }: { isActive: boolean }) =>
                      `font-primary font-bold relative group ${
                        isActive ? "text-simpleGreen" : "hover:text-simpleGreen"
                      }`
                    }
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <span className="relative inline-block">
                        Hospital
                        <span
                          className={`absolute left-0 -bottom-7 h-[4px] bg-simpleGreen rounded transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </span>
                    )}
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  className="relative font-bold font-primary text-simpleGreen"
                >
                  <NavLink
                    to="/blog"
                    className={({ isActive }: { isActive: boolean }) =>
                      `font-primary font-bold relative group ${
                        isActive ? "text-simpleGreen" : "hover:text-simpleGreen"
                      }`
                    }
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <span className="relative inline-block">
                        Seba Blog
                        <span
                          className={`absolute left-0 -bottom-7 h-[4px] bg-simpleGreen rounded transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </span>
                    )}
                  </NavLink>
                </li>
                <li
                  className="relative flex items-center gap-1 cursor-pointer font-bold font-primary text-simpleGreen"
                  onClick={handleClick}
                >
                  Registration{" "}
                  <span className="pt-1">
                    <ChevronDown />
                  </span>
                  {isOpen && (
                    <div className="bg-white shadow-2xl rounded-sm absolute z-10 top-14 right-0 w-72 py-2">
                      <ul className="flex flex-col px-4 gap-2 font-medium">
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
                          <NavLink to="/registration/hospital">
                            Hospital Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
                          <NavLink to="/registration/doctor">
                            Doctor Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
                          <NavLink to="/registration/agent">
                            Agents Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
                          <NavLink to="/registration/diagnostic">
                            Diagnostic Center Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
                          <NavLink to="/registration/insurance">
                            Insurance Company Registration
                          </NavLink>
                        </li>
                        <li className="cursor-pointer text-slate-700 hover:text-simpleGreen">
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
                  <CircleUser className="text-black"/> <span className="font-bold text-simpleGreen">EN</span>
                  {isLanguageOpen && (
                    <div className="bg-gray-100 text-gray-800 rounded-sm shadow-2xl absolute top-8 right-0 w-20 py-2 z-10">
                      <ul className="flex flex-col px-2 gap-2 font-primary font-bold">
                        <li className="flex items-center gap-1 cursor-pointer hover:text-simpleGreen">
                          <CircleUser />
                          EN
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-simpleGreen">
                          <CircleUser />
                          BN
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-simpleGreen">
                          <CircleUser />
                          FR
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <Link to="/login">
                  <Button className="bg-simpleGreen hover:bg-darkGreen text-white cursor-pointer">
                    Login
                  </Button>
                </Link>
              </ul>
            </nav>
            {/* mobile menu */}
            <div className="md:hidden flex">
              <button>
                <MobileMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
