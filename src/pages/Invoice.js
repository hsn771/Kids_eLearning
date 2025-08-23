import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../admin/component/axios';
import Weblayout from "../layout/weblayout";

function Invoice() {
  const { order_id } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`front_api/invoice.php?order_id=${order_id}`)
      .then(res => {
        console.log("API Response:", res.data); // Debugging
        if (res.data.error) {
          setError(res.data.message);
        } else {
          setOrderData(res.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setError('Failed to fetch invoice data. Please check the console for details.');
        setLoading(false);
      });
  }, [order_id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return (
    <Weblayout>
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading invoice...</p>
        </div>
      </div>
    </Weblayout>
  );

  if (error) return (
    <Weblayout>
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">Please check the order ID and try again.</p>
        </div>
      </div>
    </Weblayout>
  );

  if (!orderData) return (
    <Weblayout>
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          No invoice data found.
        </div>
      </div>
    </Weblayout>
  );

  return (
    <Weblayout>
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Invoice #{orderData.id}</h2>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-sm-6">
                <h5>Customer Information:</h5>
                <p><strong>Name:</strong> {orderData.customer_name}</p>
                <p><strong>Email:</strong> {orderData.customer_email}</p>
                <p><strong>Contact:</strong> {orderData.customer_contact}</p>
                <p><strong>Address:</strong> {orderData.billing_address}</p>
              </div>
              <div className="col-sm-6 text-sm-end">
                <h5>Invoice Details:</h5>
                <p><strong>Date:</strong> {formatDate(orderData.creation_date)}</p>
                <p><strong>Status:</strong> <span className={`badge ${orderData.status === 'Delivered/Completed' ? 'bg-success' : orderData.status === 'Cancelled' ? 'bg-danger' : 'bg-warning'}`}>{orderData.status}</span></p>
                <p><strong>Invoice ID:</strong> {orderData.id}</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.items && orderData.items.length > 0 ? (
                    orderData.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>৳{parseFloat(item.price).toFixed(2)}</td>
                        <td>{item.quantity || 1}</td>
                        <td>৳{((item.itemTotal || item.price) * (item.quantity || 1)).toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No items found</td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="text-end"><strong>Subtotal:</strong></td>
                    <td><strong>৳{parseFloat(orderData.sub_total).toFixed(2)}</strong></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-end"><strong>Discount:</strong></td>
                    <td><strong>৳{parseFloat(orderData.discount).toFixed(2)}</strong></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="text-end"><strong>Grand Total:</strong></td>
                    <td><strong>৳{parseFloat(orderData.grand_total).toFixed(2)}</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary me-2" onClick={() => window.print()}>
                Print Invoice
              </button>
              <button className="btn btn-outline-secondary" onClick={() => window.history.back()}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Weblayout>
  );
}

export default Invoice;