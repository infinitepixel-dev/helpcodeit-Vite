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
import Loops from "./components/Pages/javascriptPrincipals/loops";
import JSObjects from "./components/Pages/javascriptPrincipals/JSObjects";

export default function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <DarkModeProvider>
      <div>
        <div className="w-full m-0 p-0">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path='/GettingStarted' element={<GettingStarted />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route path="/javascript" element={<JavascriptMainPage />} />
          <Route
            path="/javascriptPrincipals/PracticeProblems"
            element={<PracticeProblems />}
          />
          <Route
            path="/javascriptPrincipals/DeclaringVariables"
            element={<DeclaringVariables />}
          />
          <Route
            path="/javascriptPrincipals/StandardFunctions"
            element={<StandardFunctions />}
          />
          <Route path="/javascriptPrincipals/Loops" element={<Loops />} />
          {/*<Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
          <Route path="/code_practice" element={<CodePractice />} />
          <Route path="/javascriptPrincipals/Objects" element={<JSObjects />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
}
