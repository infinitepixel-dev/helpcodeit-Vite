import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@assets/helpcodeitlogo.svg';
import { navItems } from '../../Routes/Routes';
import './Navbar.module.css';
import { BlogContext } from '@subComponents/BlogAPI';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Consume BlogContext to get posts
  const { posts } = useContext(BlogContext);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 778);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClasses = ({ isActive }) => `
    px-3 py-2 rounded-md text-base font-medium
    ${isActive
      ? 'bg-gray-900 text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }
  `;

  const Dropdown = ({ label, items }) => {
    const isDropdownOpen = openDropdown === label;

    const toggleDropdown = () => {
      if (isSmallScreen) {
        setOpenDropdown(isDropdownOpen ? null : label);
      }
    };

    return (
      <div className="relative group">
        <button
          onClick={toggleDropdown}
          className="px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          {label}
        </button>
        <div
          id="custom-drop"
          style={{ top: '30px' }}
          className={`
            absolute w-48 mt-2 right-0 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50
            ${isSmallScreen
              ? isDropdownOpen ? 'block' : 'hidden'
              : 'invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300'}
          `}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="block px-4 py-2 text-base font-bold text-gray-600 hover:bg-gray-50"
                role="menuitem"
                onClick={() => {
                  setOpenDropdown(null);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderNavItems = (isMobile = false) => {
    return navItems.map((item, index) => {
      if (item.type === 'link') {
        return (
          <NavLink
            key={index}
            to={item.to}
            className={navLinkClasses}
            end={item.to === '/'}
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        );
      } else if (item.type === 'dropdown') {
        return <Dropdown key={index} label={item.label} items={item.items} />;
      }
    });
  };

  // Example of passing posts to the /blogs link
  const renderBlogsNavLink = () => {
    console.log("navbar:",posts);

    return (
      <NavLink
        to="/blogs"
        className={navLinkClasses}
        state={{ posts }}  // Pass the posts via state
      >
        Blogs
      </NavLink>
    );
  };

  return (
    <nav className="relative z-40 bg-neutral-900">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-10 h-10 rounded-lg" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block me-5 ms-auto">
            <div className="flex items-baseline space-x-3 ml-28">
              {renderNavItems()}
              {renderBlogsNavLink()} {/* Add Blogs NavLink */}
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full bg-gray-800 md:hidden">
          <div className="flex flex-col items-end px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderNavItems(true)}
            {renderBlogsNavLink()} {/* Add Blogs NavLink for mobile */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
