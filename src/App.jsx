import './App.css'
import { useEffect, useState, lazy, Suspense } from 'react'
import { DarkModeProvider } from './components/Context/DarkModeProvider'
import Navbar from './components/Navigation/Navbar'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Sub_Components/Footer'
import War from './components/Pages/javascriptPrincipals/War.jsx'
import ScheduleMeeting from './components/Pages/ScheduleMeeting.jsx'


// Lazy loading components
const HomePage = lazy(() => import('./components/Pages/HomePage'))
const About = lazy(() => import('./components/Pages/About'))
const DataGenerator = lazy(() => import('./components/Sub_Components/DataGenerator'))
const JavascriptMainPage = lazy(
    () => import('./components/Pages/JavascriptMainPage')
)
const PracticeProblems = lazy(
    () => import('./components/Pages/javascriptPrincipals/PracticeProblems')
)
const DeclaringVariables = lazy(
    () => import('./components/Pages/javascriptPrincipals/DeclaringVariables')
)
const CodePractice = lazy(
    () => import('./components/Sub_Components/Code_Practice')
)
const StandardFunctions = lazy(
    () => import('./components/Pages/javascriptPrincipals/StandardFunctions')
)
const Loops = lazy(
    () => import('./components/Pages/javascriptPrincipals/Loops')
)
const JSObjects = lazy(
    () => import('./components/Pages/javascriptPrincipals/JSObjects')
)
const ArrowFunctions = lazy(
    () => import('./components/Pages/javascriptPrincipals/ArrowFunctions')
)
const ArrayMethods = lazy(
    () => import('./components/Pages/javascriptPrincipals/ArrayMethods')
)
const StringMethods = lazy(
    () => import('./components/Pages/javascriptPrincipals/StringMethods')
)
const PackagesAndPackageJson = lazy(
    () =>
        import('./components/Pages/javascriptPrincipals/PackagesAndPackageJson')
)
const Bootstrap = lazy(
    () => import('./components/Pages/fundamentals/Bootstrap')
)
const JSCRUDMain = lazy(
    () => import('./components/Pages/javascriptPrincipals/JSCRUDMain')
)
const AJAX = lazy(
    () => import('./components/Pages/javascriptPrincipals/CRUD/AJAX')
)
const Fetch = lazy(
    () =>
        import(
            './components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch'
        )
)
const GitHub = lazy(() => import('./components/Pages/fundamentals/GitHub'))
const GitHubCheatsheet = lazy(
    () => import('./components/Pages/fundamentals/GitHubCheatsheet')
)
const Installs = lazy(() => import('./components/Pages/fundamentals/Installs'))
const PracticeEnvironment = lazy(
    () => import('./components/Pages/fundamentals/PracticeEnvironment')
)
const StringConcatenation = lazy(
    () => import('./components/Pages/javascriptPrincipals/StringConcatenation')
)
const UnitTestingMochaChai = lazy(
    () => import('./components/Pages/javascriptPrincipals/UnitTestingMochaChai')
)
const VSCodeExtensions = lazy(
    () => import('./components/Pages/fundamentals/VSCodeExtensions')
)
const ReactMain = lazy(() => import('./components/Pages/react/ReactMain'))
const ReactComponents = lazy(
    () => import('./components/Pages/react/ReactComponents')
)
const ReactRouter6 = lazy(() => import('./components/Pages/react/ReactRouter6'))
const VSCodeHotkeysTable = lazy(
    () => import('./components/Pages/fundamentals/VSCodeHotkeysTable')
)
const MenuApp = lazy(
    () => import('./components/Pages/javascriptPrincipals/MenuApp')
)
const PropsAndState = lazy(
    () => import('./components/Pages/react/PropsAndState')
)
const PlanningReactApps = lazy(
    () => import('./components/Pages/react/PlanningReactApps')
)



export default function App() {
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: light)').matches
    )

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

    const routes = [
        // Home
        { path: '/', component: <HomePage theme={theme} /> },
        { path: '/about', component: <About /> },
        { path: '/schedule-meeting', component: <ScheduleMeeting />},
        { path: '/data-generator', component: <DataGenerator /> },

        // Fundamentals
        { path: '/fundamentals/GitHub', component: <GitHub /> },
        {
            path: '/fundamentals/VSCodeHotkeysTable',
            component: <VSCodeHotkeysTable />,
        },
        { path: '/fundamentals/Bootstrap', component: <Bootstrap /> },
        { path: '/fundamentals/Installs', component: <Installs /> },
        {
            path: '/fundamentals/VSCodeExtensions',
            component: <VSCodeExtensions />,
        },
        {
            path: '/fundamentals/SettingUpPracticeEnvironment',
            component: <PracticeEnvironment />,
        },
        {
            path: '/fundamentals/GitHubCheatsheet',
            component: <GitHubCheatsheet />,
        },

        // Javascript
        { path: '/javascript', component: <JavascriptMainPage /> },
        {
            path: '/javascriptPrincipals/PracticeProblems',
            component: <PracticeProblems />,
        },
        {
            path: '/javascriptPrincipals/DeclaringVariables',
            component: <DeclaringVariables />,
        },
        {
            path: '/javascriptPrincipals/StringConcatenation',
            component: <StringConcatenation />,
        },
        {
            path: '/javascriptPrincipals/StandardFunctions',
            component: <StandardFunctions />,
        },
        {
            path: '/javascriptPrincipals/UnitTestingMochaChai',
            component: <UnitTestingMochaChai />,
        },
        { path: '/javascriptPrincipals/Loops', component: <Loops /> },
        { path: '/code_practice', component: <CodePractice /> },
        { path: '/javascriptPrincipals/Objects', component: <JSObjects /> },
        {
            path: '/javascriptPrincipals/ArrowFunctions',
            component: <ArrowFunctions />,
        },
        {
            path: '/javascriptPrincipals/ArrayMethods',
            component: <ArrayMethods />,
        },
        {
            path: '/javascriptPrincipals/StringMethods',
            component: <StringMethods />,
        },
        {
            path: '/javascriptPrincipals/PackagesAndPackageJson',
            component: <PackagesAndPackageJson />,
        },
        { path: '/javascriptPrincipals/CRUD-Main', component: <JSCRUDMain /> },
        { path: '/javascriptPrincipals/CRUD-AJAX', component: <AJAX /> },
        { path: '/javascriptPrincipals/CRUD-Fetch', component: <Fetch /> },
        { path: '/javascriptPrincipals/MenuApp', component: <MenuApp /> },
        {path: '/javascriptPrincipals/WarGameTutorial', component: <War />},

        // React
        { path: '/ReactMain', component: <ReactMain /> },
        { path: '/ReactComponents', component: <ReactComponents /> },
        { path: '/ReactRouter6', component: <ReactRouter6 /> },
        {path: '/PropsAndState', component: <PropsAndState />},
        {path: '/PlanningReactApps', component: <PlanningReactApps />},

        // Default
        { path: '*', component: <HomePage /> },
    ]

    return (
        <DarkModeProvider>
            <div>
                <div className="m-0 w-full p-0">
                    <Navbar theme={theme} />
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routes.map(({ path, component }) => (
                            <Route key={path} path={path} element={component} />
                        ))}
                    </Routes>
                </Suspense>

                <div className="m-0 mt-5 w-full p-0">
                    <Footer />
                </div>
            </div>
        </DarkModeProvider>
    )
}
