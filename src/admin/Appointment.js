import React, { useEffect, useState } from 'react';
import axios from "../admin/component/axios";
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Appointment() {
  const [list,setList]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const handleClose = () => {
    setShow(false)
  };
  
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`appointment/list.php`)
    
    setList(res.data);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
      g_name:e.target.g_name.value,
      g_email:e.target.g_email.value,
      c_name:e.target.c_name.value,
      c_age:e.target.c_age.value,
      msg:e.target.msg.value,
      id:inputs.id
    }
   
    const formData = new FormData();
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url=`appointment/update.php`;
      
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
    let res = await axios.get(`appointment/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Appointment</h1>
        
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Guardian Name</th>
            <th>Guardian Email</th>
            <th>Child Name</th>
            <th>Child Age</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.g_name}</td>
              <td>{d.g_email}</td>
              <td>{d.c_name}</td>
              <td>{d.c_age}</td>
              <td>{d.msg}</td>
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
                  <label htmlFor='g_name'>Guardian Name</label>
                  <input type='text' defaultValue={inputs.g_name} className='form-control' name="g_name" id='g_name'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='g_email'>Guardian Email</label>
                  <input type='text' defaultValue={inputs.g_email} className='form-control' name="g_email" id='g_email'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='c_name'>Child Name</label>
                  <input type='text' defaultValue={inputs.c_name} className='form-control' name="c_name" id='c_name'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='c_age'>Child Age</label>
                  <input type='text' defaultValue={inputs.c_age} className='form-control' name="c_age" id='c_age'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='msg'>Message</label>
                  <textarea defaultValue={inputs.msg} className='form-control' name="msg" id='msg'></textarea>
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


export default Appointment;
