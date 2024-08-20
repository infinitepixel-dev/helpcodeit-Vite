import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
// import logo from '@assets/helpcodeitlogo.svg'
import { navItems } from '../../Routes/Routes'
import './Navbar.module.css'

const LogoImage = React.lazy(() => import('../Sub_Components/LogoImage.jsx'))

// eslint-disable-next-line no-unused-vars
const Navbar = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 778)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navLinkClasses = ({ isActive }) => `
    px-3 py-2 rounded-md text-base font-medium
    ${
        isActive
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }
  `

    const Dropdown = ({ label, items }) => {
        const isDropdownOpen = openDropdown === label

        const toggleDropdown = () => {
            if (isSmallScreen) {
                setOpenDropdown(isDropdownOpen ? null : label)
            }
        }

        return (
            <div className="group relative">
                <button
                    onClick={toggleDropdown}
                    className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    {label}
                </button>
                <div
                    id="custom-drop"
                    style={{ top: '30px' }}
                    className={`
          absolute  right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5
          ${
              isSmallScreen
                  ? isDropdownOpen
                      ? 'block'
                      : 'hidden'
                  : 'invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'
          }
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
                                    setOpenDropdown(null)
                                    setIsOpen(false)
                                }}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    Dropdown.propTypes = {
        label: propTypes.string.isRequired,
        items: propTypes.array.isRequired,
    }

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
                )
            } else if (item.type === 'dropdown') {
                return (
                    <Dropdown
                        key={index}
                        label={item.label}
                        items={item.items}
                    />
                )
            }
        })
    }

    return (
        <nav className="relative z-40 bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {/* <img
                                className="h-10 w-10 rounded-lg"
                                src={logo}
                                alt="Logo"
                            /> */}
                            <LogoImage classNameValue="h-10 w-10 rounded-lg" />
                        </div>
                    </div>
                    <div className="me-5 ms-auto hidden md:block">
                        <div className="ml-28 flex items-baseline space-x-3">
                            {renderNavItems()}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    {!isSmallScreen && (
                        <div>
                            <a href="https://www.buymeacoffee.com/michaelvarnell">
                                <img
                                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=michaelvarnell&button_colour=fa2e42&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
                                    className="h-9"
                                />
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full bg-gray-800 md:hidden">
                    <div className="flex flex-col items-end space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {renderNavItems(true)}
                    </div>
                </div>
            )}
        </nav>
    )
}

Navbar.propTypes = {
    theme: propTypes.string.isRequired,
}

export default Navbar
