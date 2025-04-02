import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={handleClick}>
        <Menu className="hover:text-red-600" />
      </div>
      {isOpen && (
        <div className="absolute top-4 left-0 px-4 w-full md:w-auto z-40">
          <div className="bg-white shadow p-2">
            {/* logo */}
            <div className="flex items-center justify-between pb-4 border-b">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <X
                className="cursor-pointer hover:text-red-600"
                onClick={handleClick}
              />
            </div>
            {/* menu */}
            <nav>
              <ul className="flex flex-col gap-2 items-start pt-2 border-b-2">
                <li onClick={handleClick}>
                  <NavLink to="/doctor">Doctor</NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="/hospital">Hospital</NavLink>
                </li>
                <li onClick={handleClick}>
                  <NavLink to="/blog">Seba Blog</NavLink>
                </li>
                <li
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={handleSubMenuClick}
                >
                  registration{" "}
                  <span className="pt-1">
                    <ChevronDown />
                  </span>
                </li>
                <div>
                  {isSubMenuOpen && (
                    <div className="px-3 min-w-[300px] border" onClick={handleSubMenuClick}>
                      <ul className="flex flex-col gap-2 items-start pt-2 md:w-64" onClick={handleClick}>
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
                </div>
                <li className="cursor-pointer pb-2">
                  EN
                </li>
              </ul>
              {/* button */}
              <Link to="/login" className="flex pt-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                    Login
                  </Button>
                </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
