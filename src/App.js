import React, { useEffect, useState } from "react";
import{Route, Routes} from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
/* admin route */
import Login from './admin/Login';
import Register from './admin/Register';
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';
import Useradd from './admin/Useradd';
import Protected from './admin/protected';
// import "./assets/lib/animate/animate.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";
// import "./assets/importfile.css";

function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/classes" element={<Classes/>}/>
      <Route path="/facilities" element={<Facilities/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Admin route */}
           <Route path= {"/admin/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/admin/user"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />
          <Route path="/admin/add-user" element={<Useradd />} />
    </Routes>
    </>
  );
  
};

export default App;
