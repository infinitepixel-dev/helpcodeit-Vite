import "./App.css";
import { useEffect } from "react";
import { DarkModeProvider } from "./components/Context/DarkModeProvider";
import Navbar from "./components/Navigation/Navbar";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import JavascriptMainPage from "./components/Pages/JavascriptMainPage";
import PracticeProblems from "./components/Pages/javascriptPrincipals/PracticeProblems";
import DeclaringVariables from "./components/Pages/javascriptPrincipals/DeclaringVariables";
import CodePractice from "./components/Sub_Components/Code_Practice";
import StandardFunctions from "./components/Pages/javascriptPrincipals/StandardFunctions";
import Loops from "./components/Pages/javascriptPrincipals/Loops";
import JSObjects from "./components/Pages/javascriptPrincipals/JSObjects";
import ArrowFunctions from "./components/Pages/javascriptPrincipals/ArrowFunctions";
import ArrayMethods from "./components/Pages/javascriptPrincipals/ArrayMethods";
import PackagesAndPackageJson from "./components/Pages/javascriptPrincipals/PackagesAndPackageJson";
import Bootstrap from "./components/Pages/fundamentals/Bootstrap";
import JSCRUDMain from "./components/Pages/javascriptPrincipals/JSCRUDMain";
import AJAX from "./components/Pages/javascriptPrincipals/CRUD/AJAX";
import Fetch from "./components/Pages/javascriptPrincipals/CRUD/CRUD_Operations/Fetch";
import GitHub from "./components/Pages/fundamentals/GitHub";
import Installs from "./components/Pages/fundamentals/Installs";
import PracticeEnvironment from "./components/Pages/fundamentals/PracticeEnvironment";

export default function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <DarkModeProvider>
      <div>
        <div className='w-full m-0 p-0'>
          <Navbar />
        </div>

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          {/* <Route path='/GettingStarted' element={<GettingStarted />} /> */}
          <Route exact path='/about' element={<About />} />
          <Route path='/fundamentals/GitHub' element={<GitHub />} />
          <Route path='/fundamentals/Bootstrap' element={<Bootstrap />} />
          <Route path='/fundamentals/Installs' element={<Installs />} />
          <Route path='/fundamentals/SettingUpPracticeEnvironment' element={<PracticeEnvironment />}/>
<Route path='/fundamentals/Installs' element={<Installs />}/>
          <Route path='/javascript' element={<JavascriptMainPage />} />
          <Route
            path='/javascriptPrincipals/PracticeProblems'
            element={<PracticeProblems />}
          />
          <Route
            path='/javascriptPrincipals/DeclaringVariables'
            element={<DeclaringVariables />}
          />
          <Route
            path='/javascriptPrincipals/StandardFunctions'
            element={<StandardFunctions />}
          />
          <Route path='/javascriptPrincipals/Loops' element={<Loops />} />
          {/*<Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
          <Route path='/code_practice' element={<CodePractice />} />
          <Route path='/javascriptPrincipals/Objects' element={<JSObjects />} />

          <Route
            path='/javascriptPrincipals/ArrowFunctions'
            element={<ArrowFunctions />}
          />
          <Route
            path='/javascriptPrincipals/ArrayMethods'
            element={<ArrayMethods />}
          />
          <Route
            path='/javascriptPrincipals/PackagesAndPackageJson'
            element={<PackagesAndPackageJson />}
          />
          <Route
            path='/javascriptPrincipals/CRUD-Main'
            element={<JSCRUDMain />}
          />
          <Route path='/javascriptPrincipals/CRUD-AJAX' element={<AJAX />} />
          <Route path='/javascriptPrincipals/CRUD-Fetch' element={<Fetch />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
}
