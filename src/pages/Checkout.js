import React from 'react';
import { useCart } from "react-use-cart";
import axios from "../admin/component/axios";
import Weblayout from "../layout/weblayout";
import { useNavigate } from "react-router-dom";

function Checkout() {
   const {
      isEmpty,
      items,
      emptyCart,
      cartTotal,
      metadata 
   } = useCart();

   const navigate = useNavigate(); 

   const saveCheckout = async (e) => {
      e.preventDefault();

      let datas = {
        customer_name: e.target.customer_name.value,
        customer_contact: e.target.customer_contact.value,
        customer_email: e.target.customer_email.value,
        billing_address: e.target.billing_address.value,
        billing_city: e.target.billing_city.value,
        shipping_address: e.target.shipping_address.value,
        shipping_city: e.target.shipping_city.value,
        sub_total: cartTotal,
        discount: metadata.discount ?? 0,
        grand_total: cartTotal - (metadata.discount ?? 0),
        cart_details: JSON.stringify(items)
      };

      const formData = new FormData();
      for (const property in datas) {
        formData.append(property, datas[property])
      }

      try {
        let url = `front_api/checkout.php`;
        let res = await axios.post(url, formData);

        if (res.data.error === 1) {
          alert(res.data.message);
        } else {
          emptyCart();
          // Fixed: use res.data instead of response.data
          navigate(`/thank-you/${res.data.order_id}`);
        }
      } catch (e) {
        console.log(e);
        alert('Checkout failed. Please try again.');
      }
   }

   if (isEmpty) {
     return (
       <Weblayout>
         <section className="banner_area">
           <div className="banner_inner d-flex align-items-center">
             <div className="container">
               <div className="banner_content d-md-flex justify-content-between align-items-center">
                 <div className="mb-3 mb-md-0">
                   <h2>Your Cart is Empty</h2>
                   <p>Please add some courses before checkout</p>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </Weblayout>
     );
   }
    
   return(
        <Weblayout>
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Course Checkout</h2>
              <p>Complete your enrollment process</p>
            </div>
            <div className="page_link">
              <a href="/">Home</a>
              <a href="/checkout">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="checkout_area section_gap">
      <div className="container">
        <div className="billing_details">
          <div className="row">
            <div className="col-lg-8">
              <h3>Billing Details</h3>
              <form
                className="row contact_form"
                onSubmit={saveCheckout}
              >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="customer_name"
                    name="customer_name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="customer_contact"
                    name="customer_contact"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="email"
                    className="form-control"
                    id="customer_email"
                    name="customer_email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="billing_address"
                    name="billing_address"
                    placeholder="Address line 01"
                    required
                  />
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <select className="form-control" name="billing_city" required>
                    <option value="">Select City</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Chattogram</option>
                  </select>
                </div>
                
                <div className="col-md-12 form-group p_star">
                    <h3>Shipping Details</h3>
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping_address"
                    name="shipping_address"
                    placeholder="Address line 02"
                  />
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <select className="form-control" name="shipping_city">
                    <option value="">Select City</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Chattogram</option>
                  </select>
                </div>
                
                <div className="col-md-12 form-group">
                  <button type='submit' className="main_btn" >Complete Enrollment</button>
                </div>
              </form>
            </div>
            
            <div className="col-lg-4">
              <div className="order_box">
                <h2>Your Order</h2>
                <ul className="list">
                  <li>
                    <a href="#">
                      Course
                      <span>Total</span>
                    </a>
                  </li>
                  {items.map((d, key) => (
                    <li key={d.id}>
                      <a href="#">
                        {d.name}
                        <span className="middle">x {d.quantity}</span>
                        <span className="last">৳{d.itemTotal}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                
                <ul className="list list_2">
                  <li>
                    <a href="#">
                      Subtotal
                      <span>৳{cartTotal}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Discount
                      <span>৳{metadata.discount ?? 0}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Total
                      <span>৳{cartTotal - (metadata.discount ?? 0)}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </Weblayout>
    )
}

export default Checkout;