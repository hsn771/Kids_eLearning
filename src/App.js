import React from "react";
import{Route, Routes} from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
/* admin route */
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';
import Useradd from './admin/Useradd';
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

      {/* Admin route */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/add-user" element={<Useradd />} />
    </Routes>
    </>
  );
  
};

export default App;
