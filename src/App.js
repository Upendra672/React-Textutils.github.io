import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
// import Alert from './components/alert';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); //whether dark mode is enable or not

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#151038";
    }
  };
  return (
    <Router>
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />


      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm title="Enter the text to analyse:" mode={Mode} />
            }
          />
        </Routes>
      </div>
      <div className="container">
        <Routes>
          {/* <Route exact path="/" element={<TextForm title="Enter the text to analyse:" mode={Mode}/>} /> */}
          <Route exact path="/about" element={<About mode={Mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
