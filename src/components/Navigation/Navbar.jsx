import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/helpcodeitlogo.svg'
import { navItems } from '../../Routes/Routes'
import { BlogContext } from '@subComponents/BlogAPI'
import { gsap } from 'gsap'
import './Navbar.module.css'

const Navbar = ({ theme }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960)
    const mobileMenuRef = useRef(null)
    const beaconRef = useRef(null)

    const { posts } = useContext(BlogContext)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 960)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    }, [menuOpen])

    useEffect(() => {
        if (menuOpen && beaconRef.current) {
            gsap.to(beaconRef.current, {
                scale: 1.4,
                opacity: 0.6,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: 'power2.inOut',
            })
        } else {
            gsap.killTweensOf(beaconRef.current)
            gsap.set(beaconRef.current, { scale: 1, opacity: 0 })
        }
    }, [menuOpen])

    const toggleDropdown = (label) => {
        if (isMobile) {
            setActiveDropdown(activeDropdown === label ? null : label)
        }
    }

    const renderNavItem = (item, index) => {
        if (item.type === 'link') {
            return (
                <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                        `flex items-center justify-between rounded-md px-4 py-2 text-base font-medium transition hover:bg-gray-700 hover:text-white ${
                            isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300'
                        }`
                    }
                    onClick={() => setMenuOpen(false)}
                >
                    {item.label}
                </NavLink>
            )
        }

        if (item.type === 'dropdown') {
            const isOpen = activeDropdown === item.label
            return (
                <div key={index} className="relative w-full">
                    <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        <span>{item.label}</span>
                        <svg
                            className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            isMobile
                                ? isOpen
                                    ? 'visible max-h-96 opacity-100'
                                    : 'invisible max-h-0 opacity-0'
                                : 'invisible absolute right-0 mt-2 w-48 opacity-0 group-hover:visible group-hover:opacity-100'
                        } rounded-md bg-gray-700 shadow-lg`}
                    >
                        {item.items.map((subItem, subIndex) => (
                            <NavLink
                                key={subIndex}
                                to={subItem.to}
                                className="block w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600"
                                onClick={() => {
                                    setMenuOpen(false)
                                    setActiveDropdown(null)
                                }}
                            >
                                {subItem.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 bg-neutral-900 dark:bg-gray-900">
            <div className="container mx-auto flex items-center justify-between px-3 py-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 rounded-lg"
                    />
                    <span className="text-xl font-bold text-white">
                        HelpCodeIT
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center justify-center space-x-6 md:flex">
                    {navItems.map(renderNavItem)}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        ref={mobileMenuRef}
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                        <div
                            ref={beaconRef}
                            className="absolute inset-0 m-auto h-8 w-8 rounded-full bg-white opacity-30"
                            style={{ zIndex: 1 }}
                        ></div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="flex flex-col items-start space-y-2 bg-gray-800 p-4 md:hidden">
                    {navItems.map(renderNavItem)}
                </div>
            )}
        </nav>
    )
}

export default Navbar
