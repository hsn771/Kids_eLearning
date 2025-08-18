import React, { useEffect, useState } from 'react';
import axios from "../admin/component/axios";
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Coupon() {
  const [list,setList]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            name:'',
            code:'',
            amount:'',
            start_date:'',
            finish_date:''
        });
    setShow(true);
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`coupon/list.php`)
    setList(res.data);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
      name:e.target.name.value,
      code:e.target.code.value,
      amount:e.target.amount.value,
      start_date:e.target.start_date.value,
      finish_date:e.target.finish_date.value
    }
    
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        url=`coupon/update.php`;
      }else{
        url=`coupon/add.php`;
      }
     
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
    let res = await axios.get(`coupon/delete.php?id=${id}&table_name=categories`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Coupon</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Code</th>
            <th>Amount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.code}</td>
              <td>{d.amount}</td>
              <td>{d.start_date}</td>
              <td>{d.finish_date}</td>
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
                  <label htmlFor='name'>Name</label>
                  <input type='text' defaultValue={inputs.name} className='form-control' name="name" id='name'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='code'>Code</label>
                  <input type='text' defaultValue={inputs.code} className='form-control' name="code" id='code'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='amount'>Amount (%)</label>
                  <input type='text' defaultValue={inputs.amount} className='form-control' name="amount" id='amount'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='start_date'>Start Date</label>
                  <input type='date' defaultValue={inputs.start_date} className='form-control' name="start_date" id='start_date'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='finish_date'>End Date</label>
                  <input type='date' defaultValue={inputs.finish_date} className='form-control' name="finish_date" id='finish_date'/>
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


export default Coupon;
