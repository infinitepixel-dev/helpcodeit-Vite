import "./App.css";
import { DarkModeProvider } from "./components/Context/DarkModeProvider";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import JavascriptMainPage from "./components/Pages/JavascriptMainPage";

export default function App() {
  return (
    <DarkModeProvider>
      <div>
        <div className="w-full m-0 p-0  ">
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path='/GettingStarted' element={<GettingStarted />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route path="/javascript" element={<JavascriptMainPage />} />
          {/*<Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
    </DarkModeProvider>
  );
}
