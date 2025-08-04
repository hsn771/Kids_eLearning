import React from "react";
import{Route, Routes} from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
// import "./assets/lib/animate/animate.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";
// import "./assets/importfile.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/facilities" element={<Facilities/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
  
};

export default App;
