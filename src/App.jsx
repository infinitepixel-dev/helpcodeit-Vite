import './App.css'
import { useEffect, useState, Suspense } from 'react'
import { DarkModeProvider } from './components/Context/DarkModeProvider'
import Navbar from './components/Navigation/Navbar'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Routes, Route } from 'react-router-dom'
import routes from './Routes/Routes'
import Footer from './components/Sub_Components/Footer'

export default function App() {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: light)').matches)

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    useEffect(() => {
        const themeQuery = window.matchMedia('(prefers-color-scheme: light)')
        const themeChangeHandler = () => setTheme(themeQuery.matches)

        themeQuery.addEventListener('change', themeChangeHandler)

        return () => {
            themeQuery.removeEventListener('change', themeChangeHandler)
        }
    }, [])

    const routeElements = Object.entries(routes).map(([key, route]) => {
        const { path, component: Component, props } = route;
        return (
            <Route
                key={key}
                path={path}
                element={<Component {...(props || {})} />}
            />
        );
    });

    return (
        <DarkModeProvider>
            <div>
                <div className="m-0 w-full p-0">
                    <Navbar theme={theme} />
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>{routeElements}</Routes>
                </Suspense>

                <div className="m-0 mt-5 w-full p-0">
                    <Footer />
                </div>
            </div>
        </DarkModeProvider>
    )
}