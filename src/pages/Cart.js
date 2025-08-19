import React from 'react'
import Weblayout from "../layout/weblayout";
import { useCart } from "react-use-cart";
import { TiArrowUp, TiArrowDown } from 'react-icons/ti';
import axios from "../admin/component/axios";
import { Link, useLocation } from 'react-router';
import "../assets/css/Cart.css";

function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        setCartMetadata,
        metadata 
      } = useCart();
      const [discount,setDiscount]=React.useState(metadata.discount ?? 0);
    const checkCoupon=async () => {
      let code=document.getElementById('coupon_code').value;
      let res = await axios.get(`front_api/coupon_check.php?code=${code}`);
      if(res.data){
        if(res.data?.amount){
          let dis=cartTotal * (parseFloat(res.data?.amount)/100);
          setDiscount(dis);
          setCartMetadata({ discount: dis });
        }
      }
    }
  return (
    <Weblayout>
        <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Cart</h2>
              <p>You’re almost there! Confirm your courses and start learning today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* {JSON.stringify(items)} */}
                {
                    !isEmpty && items.map((d, key) =>
                <tr>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <img src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="" width="100px" />
                      </div>
                      <div className="media-body">
                        <p>{d.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>{d.price}</h5>
                  </td>
                  <td>
                    <div className="product_count">
                      <input
                        type="text"
                        name="qty"
                        id="sst"
                        maxLength="12"
                        value={d.quantity}
                        title="Quantity:"
                        className="input-text qty"
                      />
                      <button
                        onClick={() => updateItemQuantity(d.id, (d.quantity ?? 0) + 1)}
                        className="increase items-count"
                        type="button"
                      >
                        <TiArrowUp size={20} />
                      </button>
                      <button
                        onClick={() => updateItemQuantity(d.id, (d.quantity ?? 0) - 1)}
                        className="reduced items-count"
                        type="button"
                      >
                        <TiArrowDown size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                          <h5>{d.itemTotal}</h5>
                        </td>
                      </tr>
                      )}
                      <tr className="bottom_button">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="cupon_text">
                            <input id="coupon_code" type="text" placeholder="Coupon Code" />
                            <button onClick={checkCoupon} className="main_btn" style={{margin:'5px'}} >Apply</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          <h5>Subtotal</h5>
                        </td>
                        <td>
                          <h5>{cartTotal}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          <h5>Discount</h5>
                        </td>
                        <td>
                          <h5>{discount}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          <h5>total</h5>
                        </td>
                        <td>
                          <h5>{cartTotal - discount}</h5>
                        </td>
                      </tr>
                      <tr className="out_button_area">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <div className="checkout_btn_inner">
                            <Link to={'/classes'} className="gray_btn" href="#">Continue Shopping</Link>
                            <Link to={'/checkout'} className="main_btn" href="#">Proceed to checkout</Link>
                          </div>
                        </td>
                      </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    </Weblayout>
  )
}

export default Cart;