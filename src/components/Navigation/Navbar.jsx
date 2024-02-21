import { useState, useEffect, useRef } from "react";
import logo from "../../assets/helpcodeitlogo.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.module.css";

import gsap from "gsap";

function Navbar() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);
  const logoRef = useRef(null);
  // Adjusted to use state for dynamic speed control, with a sensible default value
  // eslint-disable-next-line no-unused-vars
  const [logoSpeed, setLogoSpeed] = useState(1.5); // Duration in seconds for a more noticeable effect

  // Function to get the class name for the active link and the current path
  // eslint-disable-next-line no-unused-vars
  const getClassName = ({ isActive }, currentPath) => {
    if (isActive) {
      // console.clear();
      // console.log("Current Path:", currentPath, "isActive: ", isActive);
    }

    return `p-2 hover:bg-slate-500 rounded ${
      isActive ? "bg-red-500" : "bg-transparent"
    } ${
      isSmallScreen ? "text-right w-full" : "space-x-4"
    } font-bold dark:text-white text-black`;
  };

  // NOTE UseEffect to handle GSAP logo animation
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(logoRef.current, {
      rotation: 15,
      duration: logoSpeed - 1,
      transformOrigin: "center",
    }).to(logoRef.current, {
      rotation: -15,
      duration: logoSpeed,
      transformOrigin: "center",
    });
  }, [logoSpeed]); // Reacts to changes in logoSpeed

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //NOTE Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    var myElement = document.getElementById("dropdown-button");

    if (event.target !== myElement) {
      setDropdown(false);
    }
  });

  return (
    <div className="w-full mx-auto px-2 shadow-sm border-b border-black dark:bg-neutral-800 bg-white ">
      <nav
        className={
          isSmallScreen && navbarCollapse
            ? "flex justify-between py-4 content-start"
            : "flex justify-between py-5 content-center"
        }
      >
        <NavLink to="/">
          <p ref={logoRef}>
            <img
              src={logo}
              alt="help code it logo"
              className="rounded-lg ms-2" //REVIEW Animation
              height="50px"
              width="50px"
            ></img>
          </p>
        </NavLink>
        {/* Will return a non-boolean attribute error */}
        {/* <div className={isSmallScreen && "justify-end py-2"}> */}
        <div className={isSmallScreen ? "justify-end py-2" : undefined}>
          <button
            onClick={() => setNavbarCollapse(!navbarCollapse)}
            className={
              !isSmallScreen
                ? "hidden"
                : "float-right focus:outline-none lg:hidden"
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`flex ${
              isSmallScreen
                ? "flex-col text-right w-full dark:bg-neutral-800 bg-white dark:text-white text-black"
                : "space-x-4"
            } ${
              !navbarCollapse && isSmallScreen ? "hidden" : ""
            } font-bold dark:text-white text-black`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                getClassName({ isActive }, { currentPath: "/" })
              }
              end
            >
              Home
            </NavLink>
            {/* Dropdown for links */}
            <div className="dropdown inline-block relative  ">
              <button
                className="p-2 hover:bg-slate-500 rounded"
                onClick={() => setDropdown(!dropdown)}
                id="dropdown-button"
              >
                Getting Started
              </button>
              <ul
                className={
                  dropdown
                    ? "dropdown-menu absolute pt-1 dark:bg-gray-800 bg-white dark:text-white text-black"
                    : "dropdown-menu absolute dark:bg-gray-800 bg-white dark:text-white text-black pt-1 hidden"
                }
              >
                <li>
                  <a
                    href="#"
                    className="rounded-t hover:bg-slate-500 rounded dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap"
                  >
                    Installs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-slate-500 rounded dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap"
                  >
                    Setting up a Practice Environment
                  </a>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/fundamentals/Bootstrap"
                    className="hover:bg-slate-500 rounded rounded-b dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap"
                  >
                    Bootstrap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fundamentals/GitHub"
                    className="hover:bg-slate-500 rounded rounded-b dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap"
                  >
                    GitHub
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                getClassName({ isActive }, { currentPath: "/about" })
              }
              end
            >
              About
            </NavLink>
            <NavLink
              to="/javascript"
              className={({ isActive }) =>
                getClassName({ isActive }, { currentPath: "/javascript" })
              }
            >
              JavaScript
            </NavLink>
            <a href="" className="p-2 hover:bg-slate-500 rounded">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
