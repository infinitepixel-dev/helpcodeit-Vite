import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@assets/helpcodeitlogo.svg';
import { navItems } from '../../Routes/Routes';
import './Navbar.module.css';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);



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
          className="px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          {label}
        </button>
        <div id='custom-drop' style={{top: "30px"}} className={`
          absolute  w-48 mt-2 right-0 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50
          ${isSmallScreen
            ? (isDropdownOpen ? 'block' : 'hidden')
            : 'invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300'
          }
        `}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="block px-4 py-2 text-base font-bold text-gray-600 hover:bg-gray-50"
                role="menuitem"
                onClick={() => { setOpenDropdown(null); setIsOpen(false); }}
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

  return (
    <nav className="bg-neutral-900 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-lg" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="hidden ms-auto me-5 md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {renderNavItems()}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        { !isSmallScreen && <div ><a href="https://www.buymeacoffee.com/michaelvarnell" ><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=michaelvarnell&button_colour=fa2e42&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" className='h-9'/></a></div>}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
            {renderNavItems(true)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;