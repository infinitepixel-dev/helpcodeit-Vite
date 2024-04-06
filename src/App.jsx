import './App.css'
import { useEffect, useState } from 'react';
import { DarkModeProvider } from './components/Context/DarkModeProvider';
import Navbar from './components/Navigation/Navbar';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Footer from './components/Sub_Components/Footer';
import About from './components/Pages/About';
import JavascriptMainPage from './components/Pages/JavascriptMainPage';
import PracticeProblems from './components/Pages/javascriptPrincipals/PracticeProblems';
import DeclaringVariables from './components/Pages/javascriptPrincipals/DeclaringVariables';
import CodePractice from './components/Sub_Components/Code_Practice';
import StandardFunctions from './components/Pages/javascriptPrincipals/StandardFunctions';
import Loops from './components/Pages/javascriptPrincipals/Loops';
import JSObjects from './components/Pages/javascriptPrincipals/JSObjects';
import ArrowFunctions from './components/Pages/javascriptPrincipals/ArrowFunctions';
import ArrayMethods from './components/Pages/javascriptPrincipals/ArrayMethods';
import StringMethods from './components/Pages/javascriptPrincipals/StringMethods';
import PackagesAndPackageJson from './components/Pages/javascriptPrincipals/PackagesAndPackageJson';
import Bootstrap from './components/Pages/fundamentals/Bootstrap';
import JSCRUDMain from './components/Pages/javascriptPrincipals/JSCRUDMain';
import AJAX from './components/Pages/javascriptPrincipals/CRUD/AJAX';
import Fetch from './components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch';
import GitHub from './components/Pages/fundamentals/GitHub';
import Installs from './components/Pages/fundamentals/Installs';
import PracticeEnvironment from './components/Pages/fundamentals/PracticeEnvironment';
import StringConcatenation from './components/Pages/javascriptPrincipals/StringConcatenation';
import UnitTestingMochaChai from './components/Pages/javascriptPrincipals/UnitTestingMochaChai';
import VSCodeExtensions from './components/Pages/fundamentals/VSCodeExtensions';

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

    return (
        <DarkModeProvider>
            <div className='mb-10'>
                <div className="m-0 w-full p-0">
                    <Navbar theme={theme} />
                </div>

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePage theme={theme} />}
                    />
                    {/* <Route path='/GettingStarted' element={<GettingStarted />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/fundamentals/GitHub" element={<GitHub />} />
                    <Route
                        path="/fundamentals/Bootstrap"
                        element={<Bootstrap />}
                    />
                    <Route
                        path="/fundamentals/Installs"
                        element={<Installs />}
                    />
                    <Route path='/fundamentals/VSCodeExtensions' element={<VSCodeExtensions />} />
                    <Route
                        path="/fundamentals/SettingUpPracticeEnvironment"
                        element={<PracticeEnvironment />}
                    />
                    <Route
                        path="/fundamentals/Installs"
                        element={<Installs />}
                    />
                    <Route
                        path="/javascript"
                        element={<JavascriptMainPage />}
                    />
                    <Route
                        path="/javascriptPrincipals/PracticeProblems"
                        element={<PracticeProblems />}
                    />
                    <Route
                        path="/javascriptPrincipals/DeclaringVariables"
                        element={<DeclaringVariables />}
                    />
                    <Route
                        path="/javascriptPrincipals/StringConcatenation"
                        element={<StringConcatenation />}
                    />
                    <Route
                        path="/javascriptPrincipals/StandardFunctions"
                        element={<StandardFunctions />}
                    />
                    <Route
                        path="/javascriptPrincipals/UnitTestingMochaChai"
                        element={<UnitTestingMochaChai />}
                    />

                    <Route
                        path="/javascriptPrincipals/Loops"
                        element={<Loops />}
                    />
                    {/*<Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
                    <Route path="/code_practice" element={<CodePractice />} />
                    <Route
                        path="/javascriptPrincipals/Objects"
                        element={<JSObjects />}
                    />

                    <Route
                        path="/javascriptPrincipals/ArrowFunctions"
                        element={<ArrowFunctions />}
                    />
                    <Route
                        path="/javascriptPrincipals/ArrayMethods"
                        element={<ArrayMethods />}
                    />
                    <Route
                        path="/javascriptPrincipals/StringMethods"
                        element={<StringMethods />}
                    />
                    <Route
                        path="/javascriptPrincipals/PackagesAndPackageJson"
                        element={<PackagesAndPackageJson />}
                    />
                    <Route
                        path="/javascriptPrincipals/CRUD-Main"
                        element={<JSCRUDMain />}
                    />
                    <Route
                        path="/javascriptPrincipals/CRUD-AJAX"
                        element={<AJAX />}
                    />
                    <Route
                        path="/javascriptPrincipals/CRUD-Fetch"
                        element={<Fetch />}
                    />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <div className="m-0 w-full p-0 mt-5">
                    <Footer />
                </div>
            </div>
        </DarkModeProvider>
    )
}
