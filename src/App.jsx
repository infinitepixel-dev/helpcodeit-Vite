import './App.css'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, Suspense } from 'react'
import { DarkModeProvider } from './components/Context/DarkModeProvider'
import Navbar from './components/Navigation/Navbar'

import { Routes, Route } from 'react-router-dom'
import Footer from '@subComponents/Footer'
import RoutesWithComponents from './Routes/Routes.js'
import { Helmet } from 'react-helmet-async'
import { HelmetProvider } from 'react-helmet-async'

// console.log('RoutesWithComponents: ', RoutesWithComponents)

//INFO Define theme outside of App component
const useTheme = () => {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: light)').matches
    )

    useEffect(() => {
        const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
        const themeChangeHandler = () => setTheme(themeQuery.matches)

        themeQuery.addEventListener('change', themeChangeHandler)

        return () => {
            themeQuery.removeEventListener('change', themeChangeHandler)
        }
    }, [])

    return theme
}

function App() {
    const theme = useTheme()
    const footerComponent = RoutesWithComponents.find(
        (route) => route.key === 'footer'
    )?.component
    // console.log('footerComponent: ', footerComponent)

    return (
        <HelmetProvider>
            <DarkModeProvider>
                <div>
                    <Helmet>
                        <meta
                            name="title"
                            property="og:title"
                            content="Help Code It"
                        />
                        <meta
                            name="description"
                            property="og:description"
                            content="Help Code It is a site for beginning developers that helps you learn how to code."
                        />
                        <meta
                            name="image"
                            property="og:image"
                            content="https://www.helpcodeit.com/assets/helpcodeitlogo-CsyqkzOG.svg"
                        />
                        <meta
                            name="url"
                            property="og:url"
                            content="https://www.helpcodeit.com"
                        />
                        <meta
                            name="type"
                            property="og:type"
                            content="website"
                        />
                    </Helmet>
                    <div className="m-0 w-full p-0">
                        <Navbar theme={theme} />
                    </div>

                    <Routes>
                        {RoutesWithComponents.map(
                            ({ path, component: Component, key, props }) => (
                                <Route
                                    id={uuidv4()}
                                    key={uuidv4()}
                                    path={path}
                                    element={
                                        <Suspense
                                            fallback={<div>Loading...</div>}
                                        >
                                            <div className="mt-15">
                                                <Component {...props} />
                                            </div>
                                        </Suspense>
                                    }
                                />
                            )
                        )}
                    </Routes>

                    <div className="m-0 mt-5 w-full p-0">
                        <Footer />
                        {footerComponent
                            ? React.createElement(footerComponent)
                            : null}
                    </div>
                </div>
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="fixed right-5 bottom-12 z-0 rounded-full bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
                >
                    Back to top ↑
                </button>
            </DarkModeProvider>
        </HelmetProvider>
    )
}

// Export App but also allow routes to be exported
// export { routes }
export default App
