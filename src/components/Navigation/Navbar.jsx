import { useState, useEffect } from "react";
import logo from "../../assets/helpcodeitlogo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
      !isSmallScreen && setNavbarCollapse(false);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='w-full mx-auto px-2 dark:bg-black bg-white'>
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
            height='50px'
            width='50px'
          ></img>
        </p>
        <div className={isSmallScreen && "justify-end py-2"}>
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
              stroke='currentColor'
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
                ? "flex-col text-right w-full dark:bg-black bg-white dark:text-white text-black"
                : ""
            } ${
              !navbarCollapse && isSmallScreen ? "hidden" : ""
            } space-x-4 font-bold dark:text-white text-black dark:bg-black bg-white`}
          >
            {/* <a href='' className='p-2 hover:bg-slate-500 rounded' > */}
            <NavLink
              to='/'
              className='p-2 hover:bg-slate-500 rounded'
              activeClassName='active-link'
            >
              Home
            </NavLink>
            {/* <a/> */}
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
            <a href='' className='p-2 hover:bg-slate-500 rounded'>
              About
            </a>
            <a href='' className='p-2 hover:bg-slate-500 rounded'>
              Services
            </a>
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
