import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminlayout from '../layout/Adminlayout';
import { useNavigate } from 'react-router-dom';

function Useradd() {
    const navigate=useNavigate();
    const [inputs, setInputs] = useState(
        {
            id:'',
            name:'',
            contact_no:'',
            email:'',
            password:''
        });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `http://localhost/potter-api/users_add.php`,
                data: inputs
            });
            navigate('/admin/user')
        } 
        catch(e){
            console.log(e);
        }
    }
  
  return (
    <Adminlayout>
      <div className='container'>
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' name="name" id='name' onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control' name="email" id='email' onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='contact_no'>Contact</label>
                <input type='text' className='form-control' name="contact_no" id='contact_no' onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='text' className='form-control' name='password' id='password' onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary' >Save</button>
            </div>
        </form>
      </div>
    </Adminlayout>
    
  );
}


export default Useradd;
