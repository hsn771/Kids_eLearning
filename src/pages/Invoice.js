import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../admin/component/axios';
import Weblayout from "../layout/weblayout";

function Invoice() {
  const { order_id } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    axios.get(`front_api/invoice.php?order_id=${order_id}`)
      .then(res => {
        setOrderData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [order_id]);

  if (!orderData) return <div>Loading...</div>;

  return (
    <Weblayout>
    <div className="container mt-5">
      <h2>Invoice #{order_id}</h2>
      <p><strong>Name:</strong> {orderData.customer_name}</p>
      <p><strong>Total:</strong> {orderData.grand_total}</p>
      {/* Render more order details here */}
    </div>
    </Weblayout>
  );
}

export default Invoice;
