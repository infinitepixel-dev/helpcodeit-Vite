import { useState, useEffect } from 'react'
import logo from '../../assets/helpcodeitlogo.svg'
import { NavLink } from 'react-router-dom'
// import "./Navbar.css";

function Navbar() {
    const [navbarCollapse, setNavbarCollapse] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550)

    /*FIXME bg-red-500 not showing on mobile:
need to determine why the bg-red-500 does not show in the mobile view when going between links.
it does work when manually refreshing the page, but is not related to state changes.
*/

    // Function to get the class name for the active link and the current path
    const getClassName = ({ isActive }, currentPath) => {
        if (isActive) {
            // console.clear();
            console.log('Current Path:', currentPath, 'isActive: ', isActive)
        }

        return `p-2 hover:bg-slate-500 rounded ${
            isActive ? 'bg-red-500' : 'bg-transparent'
        } ${
            isSmallScreen ? 'text-right w-full' : 'space-x-4'
        } font-bold dark:text-white text-black`
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 550)
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial check

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    //NOTE Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        var myElement = document.getElementById('dropdown-button')

        if (event.target !== myElement) {
            setDropdown(false)
        }
    })

    return (
        <div className="mx-auto w-full border-b border-black bg-white px-2 shadow-sm dark:bg-neutral-800 ">
            <nav
                className={
                    isSmallScreen && navbarCollapse
                        ? 'flex content-start justify-between py-4'
                        : 'flex content-center justify-between py-5'
                }
            >
                <p>
                    <img
                        src={logo}
                        alt="help code it logo"
                        className="ms-2 rounded-lg"
                        height="50px"
                        width="50px"
                    ></img>
                </p>
                {/* Will return a non-boolean attribute error */}
                {/* <div className={isSmallScreen && "justify-end py-2"}> */}
                <div className={isSmallScreen ? 'justify-end py-2' : undefined}>
                    <button
                        onClick={() => setNavbarCollapse(!navbarCollapse)}
                        className={
                            !isSmallScreen
                                ? 'hidden'
                                : 'float-right focus:outline-none lg:hidden'
                        }
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="white"
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
                                ? 'w-full flex-col bg-white text-right text-black dark:bg-neutral-800 dark:text-white'
                                : 'space-x-1 md:space-x-3 md:text-2xl lg:space-x-5'
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
                        <div className="dropdown relative inline-block  ">
                            <button
                                className="rounded p-2 hover:bg-slate-500"
                                onClick={() => setDropdown(!dropdown)}
                                id="dropdown-button"
                            >
                                Getting Started
                            </button>
                            <ul
                                className={
                                    dropdown
                                        ? 'dropdown-menu absolute bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                        : 'dropdown-menu absolute hidden bg-white pt-1 text-black dark:bg-gray-800 dark:text-white'
                                }
                            >
                                <li>
                                    <NavLink
                                        to="/fundamentals/Installs"
                                        className="whitespace-no-wrap block rounded rounded-t bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        Installs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/fundamentals/SettingUpPracticeEnvironment"
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
                                        to="/fundamentals/GitHub"
                                        className="whitespace-no-wrap block rounded rounded-b bg-white px-4 py-2 hover:bg-slate-500 dark:bg-black"
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
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
                        <NavLink
                            to="/javascript"
                            className={({ isActive }) =>
                                getClassName(
                                    { isActive },
                                    { currentPath: '/javascript' }
                                )
                            }
                        >
                            JavaScript
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
