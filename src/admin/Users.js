import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminlayout from '../layout/Adminlayout';
import { Link } from 'react-router-dom';

function Users() {
    const [users,setUsers]=useState([])
  axios.get(`http://localhost/potter-api/users.php`).then(function(response) {
    setUsers(response.data);
  });
  return (
    <Adminlayout>
      <div className='container'>
        <h1>User</h1>
        <Link to={'/admin/add-user'} className="btn btn-primary">Add New</Link>
        <table className='mt-5 table table-bordered'>
          <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {users && users.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              <td>{d.contact_no}</td>
              <td>{d.email}</td>
              <td>
                  
              </td>
            </tr>
          )}
        </table>
      </div>
    </Adminlayout>
  )
}

export default Users;