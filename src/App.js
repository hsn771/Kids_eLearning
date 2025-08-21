import React, { useEffect, useState } from "react";
import{Route, Routes} from 'react-router';
import { CartProvider, useCart } from "react-use-cart";


import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
/* admin route */
import Login from './admin/Login';
import Register from './admin/Register';
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';
import Coupon from "./admin/Coupon";
import Orders from "./admin/Orders";
import Appointment from "./admin/Appointment";

import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Useradd from './admin/Useradd';
import Protected from './admin/protected';
import Categories from "./admin/Categories";
import Courses from "./admin/Courses";
import Teacher from "./admin/Teacher";
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
    <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/facilities" element={<Facilities/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="/invoice/:order_id" element={<Invoice />} />

          {/* Admin route */}
              <Route path= {"/admin/dashboard"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Dashboard /> 
              </Protected>
              } />
              <Route path= {"/admin/users"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Users /> 
              </Protected>
              } />
              <Route path= {"/admin/categories"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Categories /> 
              </Protected>
              } />
              <Route path= {"/admin/courses"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Courses /> 
              </Protected>
              } />
              <Route path= {"/admin/teacher"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Teacher /> 
              </Protected>
              } />
              <Route path= {"/admin/coupon"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Coupon /> 
              </Protected>
              } />
               <Route path= {"/admin/orders"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Orders /> 
              </Protected>
              } />
               <Route path= {"/admin/appointment"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Appointment /> 
              </Protected>
              } />
              <Route path="/admin/Useradd" element={<Protected isSignedIn= {isSignedIn} > <Useradd /> </Protected>} />
        </Routes>
    </CartProvider>
    </>
  );
  
};

export default App;
