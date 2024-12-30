import React, { useState, useEffect, useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/helpcodeitlogo.svg'
import { navItems } from '../../Routes/Routes'
import './Navbar.module.css'
import { BlogContext } from '@subComponents/BlogAPI'
import { gsap } from 'gsap'

const Navbar = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    const closeButtonRef = useRef(null)
    const beaconRef = useRef(null)

    const { posts } = useContext(BlogContext)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 960)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isOpen && beaconRef.current) {
            // GSAP animation for the beacon effect
            gsap.to(beaconRef.current, {
                scale: 1.5,
                opacity: 0.5,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        } else {
            // Reset the animation when menu is closed
            gsap.killTweensOf(beaconRef.current)
            gsap.set(beaconRef.current, { scale: 1, opacity: 0 })
        }
    }, [isOpen])

    const navLinkClasses = ({ isActive }) => `
    px-3 py-2 rounded-md text-base barlow-semi-condensed-regular
    ${
        isActive
            ? 'bg-gray-900 text-white dark:bg-gray-700 dark:text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
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
            <div className="relative group">
                <button
                    onClick={toggleDropdown}
                    className="px-3 py-2 text-base text-gray-300 rounded-md barlow-semi-condensed-regular hover:bg-gray-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    {label}
                </button>
                <div
                    id="custom-drop"
                    className={`absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800
            ${
                isSmallScreen
                    ? isDropdownOpen
                        ? 'block'
                        : 'hidden'
                    : 'invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'
            }
          `}
                    style={{
                        top: isSmallScreen ? 'auto' : '30px',
                        right: isSmallScreen ? '0' : 'auto',
                    }}
                >
                    <div
                        className="py-1 barlow-semi-condensed-regular"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {items.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className="block px-4 py-2 text-base text-gray-700 barlow-semi-condensed-regular hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
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

    // const renderBlogsNavLink = () => {
    //     return (
    //         <NavLink
    //             to="/blogs"
    //             className={navLinkClasses}
    //             state={{ posts }}
    //             onClick={() => isSmallScreen && setIsOpen(false)}
    //         >
    //             Blogs
    //         </NavLink>
    //     )
    // }

    return (
        <nav className="relative z-40 bg-neutral-900 dark:bg-gray-900">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-10 h-10 rounded-lg"
                                    src={logo}
                                    alt="Logo"
                                />
                                <h1 className="text-xl text-white roboto-font dark:text-white">
                                    HelpCodeIT
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${isSmallScreen ? 'hidden' : 'block'} me-5 ms-auto`}
                    >
                        <div className="flex items-baseline space-x-3 barlow-semi-condensed-regular ml-28">
                            {renderNavItems()}
                            {renderBlogsNavLink()}
                        </div>
                    </div>
                    <div
                        className={`flex ${isSmallScreen ? 'block' : 'hidden'}`}
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md barlow-semi-condensed-regular hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            ref={closeButtonRef}
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

                            {/* Beacon effect */}
                            {isOpen && (
                                <div
                                    ref={beaconRef}
                                    className="absolute bg-white rounded-full inset-2 opacity-70"
                                    style={{ zIndex: -1 }}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && isSmallScreen && (
                <div className="absolute z-50 w-full bg-gray-800 barlow-semi-condensed-regular dark:bg-gray-800">
                    <div className="flex flex-col items-end px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {renderNavItems(true)}
                        {renderBlogsNavLink()}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
