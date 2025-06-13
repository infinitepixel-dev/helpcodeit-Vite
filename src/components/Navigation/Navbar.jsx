import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@assets/helpcodeitlogo.svg'
import { navItems } from '../../Routes/Routes'
import { gsap } from 'gsap'

export default function Navbar({ theme }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960)
    const beaconRef = useRef(null)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 960)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

        if (menuOpen && beaconRef.current) {
            gsap.to(beaconRef.current, {
                scale: 1.3,
                opacity: 0.2,
                repeat: -1,
                yoyo: true,
                duration: 1,
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
                <li key={index}>
                    <NavLink
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `block rounded-md px-4 py-2 text-sm font-medium transition ${
                                isActive
                                    ? 'bg-slate-700 text-white'
                                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            )
        }

        if (item.type === 'dropdown') {
            const isOpen = activeDropdown === item.label
            return (
                <li
                    key={index}
                    className={`relative ${isMobile ? '' : 'group'}`}
                >
                    <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
                        aria-expanded={isOpen}
                    >
                        {item.label}
                        <svg
                            className={`ml-2 h-5 w-5 transform transition-transform ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 011.04 1.08l-4.25 3.85a.75.75 0 01-1.04 0l-4.25-3.85a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <ul
                        className={`absolute z-20 w-48 rounded-md bg-slate-800 shadow-lg transition-all ${
                            isMobile
                                ? isOpen
                                    ? 'block'
                                    : 'hidden'
                                : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'
                        }`}
                    >
                        {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                                <NavLink
                                    to={subItem.to}
                                    onClick={() => {
                                        setMenuOpen(false)
                                        setActiveDropdown(null)
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                                >
                                    {subItem.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            )
        }
    }

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-slate-900 shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
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

                {/* Desktop Nav */}
                <ul className="hidden space-x-6 md:flex">
                    {navItems.map(renderNavItem)}
                </ul>

                {/* Mobile Menu Button */}
                <div className="relative md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative z-10 rounded-md p-2 text-gray-300 hover:bg-slate-900 hover:text-white focus:outline-none"
                    >
                        <span className="sr-only">Toggle Menu</span>
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
                            className="pointer-events-none absolute inset-0 m-auto h-8 w-8 rounded-full bg-white opacity-30"
                        ></div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="bg-slate-900 px-4 py-4 md:hidden">
                    <ul className="space-y-2">{navItems.map(renderNavItem)}</ul>
                </div>
            )}
        </nav>
    )
}
