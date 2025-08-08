import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminlayout from '../layout/adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Users() {
  const [users,setUsers]=useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            name:'',
            contact_no:'',
            email:'',
            password:''
        });
    setShow(true);
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas=()=>{
    axios.get(`http://localhost/potter-api/users.php`).then(function(response) {
      setUsers(response.data);
    });
  }

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      let url='';
      if(inputs.id!=''){
        url='http://localhost/potter-api/users_update.php';
      }else{
        url='http://localhost/potter-api/users_add.php';
      }
      let response= await axios({
          method: 'post',
          responsiveTYpe: 'json',
          url: url,
          data: inputs
      });
      getDatas();
      handleClose()
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

  const deleteUser = (id) => {
    axios.delete(`http://localhost/potter-api/users_delete.php?id=${id}`).then(function(response){
      getDatas();
    });
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>User</h1>
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {users && users.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.contact_no}</td>
              <td>{d.email}</td>
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
                  <input type='text' defaultValue={inputs.name} className='form-control' name="name" id='name' onChange={handleChange}/>
              </div>
              <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' defaultValue={inputs.email} className='form-control' name="email" id='email' onChange={handleChange}/>
              </div>
              <div className='form-group'>
                  <label htmlFor='contact_no'>Contact</label>
                  <input type='text' defaultValue={inputs.contact_no} className='form-control' name="contact_no" id='contact_no' onChange={handleChange}/>
              </div>
              <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='text' defaultValue={inputs.password} className='form-control' name='password' id='password' onChange={handleChange}/>
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


export default Users;
