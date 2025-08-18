import React from 'react';
import { useCart } from "react-use-cart";
import axios from "../admin/component/axios";
import Weblayout from "../layout/weblayout";

function Checkout() {
   const {
      isEmpty,
      items,
      emptyCart,
      cartTotal,
      metadata 
    } = useCart();

    
    const saveCheckout=async (e) => {
      e.preventDefault();

      let datas={
        customer_name:e.target.customer_name.value,
        customer_contact:e.target.customer_contact.value,
        customer_email:e.target.customer_email.value,
        billing_address:e.target.billing_address.value,
        billing_city:e.target.billing_city.value,
        shipping_address:e.target.shipping_address.value,
        shipping_city:e.target.shipping_city.value,
        sub_total:cartTotal,
        discount:metadata.discount ?? 0,
        grand_total:(cartTotal - metadata.discount ?? 0),
        cart_details:JSON.stringify(items)
      }
      const formData = new FormData();
      for (const property in datas) {
        formData.append(property, datas[property])
      }

      try{
          let url=`front_api/checkout.php`
          
          let res= await axios.post(url,formData);
          // console.log(res);
          // return false;
          if(res.data.error == 1){
            alert(res.data.message)
          }else{
            emptyCart();
            window.location.href='/';
          }
        } 
        catch(e){
          console.log(e);
        }
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
              <h2>Product Checkout</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="checkout.html">Product Checkout</a>
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
                  />
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="customer_contact"
                    name="customer_contact"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Phone number"
                  ></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="customer_email"
                    name="customer_email"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Email Address"
                  ></span>
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="billing_address"
                    name="billing_address"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Address line 01"
                  ></span>
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <select className="form-control" name="billing_city">
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
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Address line 01"
                  ></span>
                </div>
                
                <div className="col-md-12 form-group p_star">
                  <select className="form-control" name="shipping_city">
                    <option value="1">Dhaka</option>
                    <option value="2">Chattogram</option>
                  </select>
                </div>
                <button type='submit' className="main_btn" >Submit</button>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="order_box">
                <h2>Your Order</h2>
                <ul className="list">
                  <li>
                    <a href="#"
                      >Product
                      <span>Total</span>
                    </a>
                  </li>
                  {!isEmpty && items.map((d, key) =>
                    <li key={d.id}>
                      <a href="#"
                        >{d.name}
                        <span className="middle">x {d.quantity}</span>
                        <span className="last">{d.itemTotal}</span>
                      </a>
                    </li>
                  )}
                  
                </ul>
                <ul className="list list_2">
                  <li>
                    <a href="#"
                      >Subtotal
                      <span>{cartTotal}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Discount
                      <span>{metadata.discount ?? 0}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      >Total
                      <span>{cartTotal - metadata.discount ?? 0}</span>
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