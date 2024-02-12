import { useState, useEffect } from "react";
import logo from "../../assets/helpcodeitlogo.svg";
import { NavLink } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);

  /*FIXME bg-red-500 not showing on mobile:
need to determine why the bg-red-500 does not show in the mobile view when going between links.
it does work when manually refreshing the page, but is not related to state changes.
*/

  // Function to get the class name for the active link and the current path
  const getClassName = ({ isActive }, currentPath) => {
    if (isActive) {
      console.clear();
      console.log("Current Path:", currentPath, "isActive: ", isActive);
    }

    return `p-2 hover:bg-slate-500 rounded ${
      isActive ? "bg-red-500" : "bg-transparent"
    } ${
      isSmallScreen ? "text-right w-full" : "space-x-4"
    } font-bold dark:text-white text-black`;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='w-full mx-auto px-2 dark:bg-neutral-800 bg-white'>
      <nav
        className={
          isSmallScreen && navbarCollapse
            ? "flex justify-between py-4 content-start"
            : "flex justify-between py-5 content-center"
        }
      >
        <p>
          <img
            src={logo}
            alt='help code it logo'
            className='rounded-lg ms-2'
            height='50px'
            width='50px'
          ></img>
        </p>
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
              className='w-6 h-6'
              fill='none'
              stroke='white'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
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
              to='/'
              className={({ isActive }) =>
                getClassName({ isActive }, { currentPath: "/" })
              }
              end
            >
              Home
            </NavLink>
            {/* Dropdown for links */}
            <div className='dropdown inline-block relative  '>
              <button
                className='p-2 hover:bg-slate-500 rounded'
                onClick={() => setDropdown(!dropdown)}
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
                    href='#'
                    className='rounded-t hover:bg-slate-500 rounded dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap'
                  >
                    Installs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:bg-slate-500 rounded dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap'
                  >
                    Setting up a Practice Environment
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    href='#'
                    className='hover:bg-slate-500 rounded rounded-b dark:bg-black bg-white py-2 px-4 block whitespace-no-wrap'
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                getClassName({ isActive }, { currentPath: "/about" })
              }
              end
            >
              About
            </NavLink>
            <NavLink to='/javascript' className={({isActive}) => getClassName({isActive}, {currentPath: "/javascript"})}>
              JavaScript
            </NavLink>
            <a href='' className='p-2 hover:bg-slate-500 rounded'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
