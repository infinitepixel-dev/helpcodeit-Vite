import "./App.css";
import { DarkModeProvider } from "./components/Context/DarkModeProvider";
import Navbar from "./components/Navigation/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";

export default function App() {
  return (
    <div>
      <DarkModeProvider>
        <div className='w-full m-0 p-0'>
          <Navbar />
        </div>
      </DarkModeProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/GettingStarted' element={<GettingStarted />} /> */}
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
