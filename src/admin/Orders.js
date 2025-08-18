import React, { useEffect, useState } from 'react';
import axios from "../admin/component/axios";
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Orders() {
  const [list,setList]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const orderStatus=['pending','accepted','delivered','canceled'];
  const handleClose = () => {
    setShow(false)
  };
  
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`orders/list.php`)
    
    setList(res.data);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
      order_status:e.target.order_status.value,
      delivery_date:e.target.delivery_date.value,
      id:inputs.id
    }
   
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url=`orders/update.php`;
      
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`orders/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Orders</h1>
        
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Customer Name</th>
            <th>Customer Contact</th>
            <th>Date</th>
            <th>Total</th>
            <th>Order Status</th>
            <th>Delivery Date</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.customer_name}</td>
              <td>{d.customer_contact}</td>
              <td>{d.order_date}</td>
              <td>{d.grand_total}</td>
              <td>{orderStatus[d.order_status]}</td>
              <td>{d.delivery_date}</td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='form-group'>
                  <label htmlFor='order_status'>Order Status</label>
                  <select defaultValue={inputs.order_status} className='form-control' name="order_status" id='order_status'>
                    {orderStatus.map((v,k) =>
                    <option key={k} value={k}>{v}</option>
                  )}
                  </select>
              </div>
              <div className='form-group'>
                  <label htmlFor='delivery_date'>Delivery Date</label>
                  <input type='date' defaultValue={inputs.delivery_date} className='form-control' name="delivery_date" id='delivery_date'/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Orders;
