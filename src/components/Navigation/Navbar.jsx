import { useState, useEffect, useRef } from 'react'
import propTypes from 'prop-types'
// import logo from '../../assets/helpcodeitlogo.svg'
import LogoImage from '../Sub_Components/LogoImage'
import { NavLink } from 'react-router-dom'

import './Navbar.module.css'

import gsap from 'gsap'
// import { Nav } from 'react-bootstrap'

function Navbar({ theme }) {
    const [navbarCollapse, setNavbarCollapse] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600)

    // const [theme, setTheme] = useState(
    //     window.matchMedia('(prefers-color-scheme: light)').matches
    // )
    const logoRef = useRef(null)
    // Adjusted to use state for dynamic speed control, with a sensible default value
    // eslint-disable-next-line no-unused-vars
    const [logoSpeed, setLogoSpeed] = useState(1.5) // Duration in seconds for a more noticeable effect

    // Function to get the class name for the active link and the current path
    // eslint-disable-next-line no-unused-vars
    const getClassName = ({ isActive }, currentPath) => {
        if (isActive) {
            // console.clear();
            // console.log("Current Path:", currentPath, "isActive: ", isActive);
        }

        return `px-2  hover:bg-slate-500 rounded-full ${
            isActive ? '' : 'bg-transparent'
        } ${
            isSmallScreen ? 'text-right w-full ' : 'space-x-4 py-2'
        } font-bold  dark:text-white text-black`
    }

    // NOTE UseEffect to handle GSAP logo animation
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true })
        tl.to(logoRef.current, {
            scale: 1.2, // Increase size by 20%
            duration: logoSpeed,
            transformOrigin: 'center',
            ease: 'power1.inOut', // Smooth easing function
        })
    }, [logoSpeed]) // Reacts to changes in logoSpeed

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 700)
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial check

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    //NOTE Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        let myElement = document.getElementById('dropdown-button')

        if (event.target !== myElement) {
            setDropdown(false)
        }
    })
    document.addEventListener('click', function (event) {
        let myElement = document.getElementById('dropdown-button2')

        if (event.target !== myElement) {
            setDropdown2(false)
        }
    })

    return (
        <div className="mx-auto w-full border-b border-black bg-gray-100 px-2 pt-2 shadow-sm dark:bg-neutral-800 ">
            <nav
                className={
                    isSmallScreen && navbarCollapse
                        ? 'flex content-start justify-between'
                        : 'flex content-center justify-between'
                }
            >
                <div className="grid">
                    <NavLink to="/">
                        <div ref={logoRef}>
                            <LogoImage
                                classNameValue="mx-auto h-10 w-10 mb-3 ms-2 rounded-lg"
                                altValue="Help code it logo"
                            />
                        </div>
                    </NavLink>
                </div>

                {/* Will return a non-boolean attribute error */}
                {/* <div className={isSmallScreen && "justify-end py-2"}> */}
                <div className={isSmallScreen ? 'justify-end' : undefined}>
                    <button
                        onClick={() => setNavbarCollapse(!navbarCollapse)}
                        className={
                            !isSmallScreen
                                ? 'hidden'
                                : 'float-right focus:outline-none lg:hidden p-5 ps-10'
                        }
                        aria-label="Toggle Menu Button"
                    >
                        <svg
                            className="h-10 w-10"
                            fill="none"
                            stroke={theme ? 'black' : 'white'}
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
                                ? 'w-full flex-col  pt-5 text-right text-black text-2xl my-3 bg-gray-100 dark:bg-neutral-800 dark:text-white'
                                : 'space-x-1 md:space-x-4 lg:space-x-6 xl:space-x-8 text-lg'
                        } ${
                            !navbarCollapse && isSmallScreen ? 'hidden' : ''
                        } font-bold text-black dark:text-white`}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                getClassName({ isActive }, { currentPath: '/' })
                            }
                            end
                        >
                            Home
                        </NavLink>

                        {/* Dropdown for links */}
                        <div className="dropdown relative inline-block ">
                            <button
                                className="rounded-full p-2 hover:bg-slate-500"
                                onClick={() => setDropdown(!dropdown)}
                                id="dropdown-button"
                                aria-label="Toggle Dropdown Fundamentals button"
                            >
                                Getting Started
                            </button>
                            <ul
                                className={
                                    dropdown
                                        ? 'dropdown-menu absolute z-50 bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                        : 'dropdown-menu absolute hidden bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                }
                            >
                                <li>
                                    <NavLink
                                        to={'/fundamentals/Installs'}
                                        className="whitespace-no-wrap block rounded rounded-t bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        Installs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/MiscPages/RubberDucky'}
                                        className="whitespace-no-wrap block rounded bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        Rubber Ducky Method
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/fundamentals/VSCodeExtensions'}
                                        className="whitespace-no-wrap block rounded rounded-t bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        VS Code Extensions
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/fundamentals/VSCodeHotkeysTable'}
                                        className="whitespace-no-wrap block rounded rounded-t bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        VS Code Hotkeys
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={
                                            '/fundamentals/SettingUpPracticeEnvironment'
                                        }
                                        className="whitespace-no-wrap block rounded bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        Setting up a Practice Environment
                                    </NavLink>
                                </li>
                                <hr />
                                <li>
                                    <NavLink
                                        to="/fundamentals/Bootstrap"
                                        className="whitespace-no-wrap block rounded rounded-b bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        Bootstrap
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/gitHubPages/GitHub"
                                        className="whitespace-no-wrap block rounded rounded-b bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* Dropdown for links */}
                        <div className="dropdown relative inline-block ">
                            <button
                                className="rounded-full p-2 hover:bg-slate-500"
                                onClick={() => setDropdown2(!dropdown2)}
                                id="dropdown-button2"
                                aria-label="Toggle Dropdown Topics"
                            >
                                Topics
                            </button>
                            <ul
                                className={
                                    dropdown2
                                        ? 'dropdown-menu absolute z-50 self-center bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                        : 'dropdown-menu absolute hidden self-center bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                }
                            >
                                <li>
                                    <NavLink
                                        to={'/javascript'}
                                        className="whitespace-no-wrap block rounded rounded-t bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        JavaScript
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/ReactMain'}
                                        className="whitespace-no-wrap block rounded bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        React.js
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/data-generator'}
                                        className="whitespace-no-wrap block rounded bg-white px-4 py-2 text-base hover:bg-slate-500 dark:bg-black"
                                    >
                                        Data Generator
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to={'/JavascriptPrincipals/APIResources'}
                                        className="whitespace-no-wrap block rounded bg-white text-base px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        API Resources
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* <NavLink
                            to="/javascript"
                            className={({ isActive }) =>
                                getClassName(
                                    { isActive },
                                    { currentPath: '/javascript' }
                                )
                            }
                        >
                            JavaScript
                        </NavLink> */}
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                getClassName(
                                    { isActive },
                                    { currentPath: '/about' }
                                )
                            }
                            end
                        >
                            About
                        </NavLink>
                        <div className="ms-auto p-1">
                            <a href="https://www.buymeacoffee.com/michaelvarnell"
                                aria-label='Buy me a coffee button'
                            >
                                <img
                                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=michaelvarnell&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff"
                                    className="h-auto w-40"
                                    alt="Buy me a coffee"
                                    aria-label='Buy me a coffee button'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    theme: propTypes.bool,
}

export default Navbar
