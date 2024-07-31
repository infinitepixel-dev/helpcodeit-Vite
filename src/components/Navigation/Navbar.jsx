import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@assets/helpcodeitlogo.svg';
import LogoImage from '../Sub_Components/LogoImage';

const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClasses = ({ isActive }) => `
    px-3 py-2 rounded-md text-sm font-medium
    ${isActive
      ? 'bg-gray-900 text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }
  `;

  const Dropdown = ({ title, items }) => {
    return (
      <div className="relative group">
        <button
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          {title}
        </button>
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-neutral-900 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-lg" src={logo} alt="Logo"  />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
              <Dropdown
                title="Getting Started"
                items={[
                  { to: '/fundamentals/Installs', label: 'Installs' },
                  { to: '/MiscPages/RubberDucky', label: 'Rubber Ducky Method' },
                  { to: '/fundamentals/VSCodeExtensions', label: 'VS Code Extensions' },
                  { to: '/fundamentals/VSCodeHotkeysTable', label: 'VS Code Hotkeys' },
                  { to: '/fundamentals/SettingUpPracticeEnvironment', label: 'Setting Up a Practice Environment' },
                ]}
              />
              <Dropdown
                title="Tools"
                items={[
                  { to: '/data-generator', label: 'Data Generator' },
                  { to: '/JavascriptPrincipals/APIResources', label: 'API Resources' },
                  { to: '/useful-links', label: 'Useful Links' },
                ]}
              />
              <Dropdown
                title="Topics"
                items={[
                    // {to: '/html' , label: 'HTML'},
                    // {to: '/css' , label: 'CSS'},
                    {to: '/fundamentals/Bootstrap', label: 'Bootstrap'},
                    {to: '/githubPages/GitHub', label: 'GitHub'},
                  { to: '/javascript', label: 'JavaScript' },
                  { to: '/ReactMain', label: 'React.js' },
                ]}
              />
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
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
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <div className="relative group w-full text-right">
              <button className="w-full text-right px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Getting Started
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <NavLink to="/fundamentals/Installs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Installs</NavLink>
                  <NavLink to="/MiscPages/RubberDucky" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Rubber Ducky Method</NavLink>
                  <NavLink to="/fundamentals/VSCodeExtensions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">VS Code Extensions</NavLink>
                </div>
              </div>
            </div>
            <div className="relative group w-full text-right">
              <button className="w-full text-right px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Tools
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <NavLink to="/data-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Data Generator</NavLink>
                  <NavLink to="/JavascriptPrincipals/APIResources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">API Resources</NavLink>
                </div>
              </div>
            </div>
            <div className="relative group w-full text-right">
              <button className="w-full text-right px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Topics
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <NavLink to="/javascript" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">JavaScript</NavLink>
                  <NavLink to="/ReactMain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">React.js</NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;