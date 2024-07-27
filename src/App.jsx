import './App.css'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, lazy, Suspense } from 'react'
import { DarkModeProvider } from './components/Context/DarkModeProvider'
import Navbar from './components/Navigation/Navbar'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Routes, Route } from 'react-router-dom'
import Footer from '@subComponents/Footer'
import RoutesWithComponents from './Routes/Routes.js'

console.log('RoutesWithComponents: ', RoutesWithComponents)

// Define theme outside of App component
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

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <DarkModeProvider>
            <div>
                <div className="m-0 w-full p-0">
                    <Navbar theme={theme} />
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {RoutesWithComponents.map(
                            ({ path, component: Component, key }) => (
                                <Route
                                    key={key}
                                    path={path}
                                    element={<Component />}
                                />
                            )
                        )}
                    </Routes>
                </Suspense>

                <div className="m-0 mt-5 w-full p-0">
                    <Footer />
                </div>
            </div>
        </DarkModeProvider>
    )
}

// Export App but also allow routes to be exported
// export { routes }
export default App
