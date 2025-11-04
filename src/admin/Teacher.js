import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Teacher() {
  const [list,setList]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);// image file

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            tname:'',
            tpost:'',
            timage:''
        });
    setShow(true);
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`teacher`)
    setList(res.data);
  }

  /* handel image/file */
  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }

  
  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        tname:e.target.tname.value,
        tpost:e.target.tpost.value,
        timage:e.target.timage.value
    }
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
    /* handel image/file */
    for (let i = 0; i < selectedfile.length; i++) {
      formData.append('files[]', selectedfile[i])
    }

    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        formData.append('_method', 'PUT');
        url=`teacher/${datas.id}`;
      }else{
        url=`teacher`;
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
    let res = await axios.get(`teacher/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Teacher</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Teacher Name</th>
            <th>Teacher Post</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.tname}</td>
              <td>{d.tpost}</td>
              <td><img src={`${process.env.REACT_APP_IMAGE_URL}${d.timage}`} width="100px"/></td>
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
            <Modal.Title>Add New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='form-group'>
                  <label htmlFor='tname'>Teacher Name</label>
                  <input type='text' defaultValue={inputs.tname} className='form-control' name="tname" id='tname'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='tpost'>Teacher Post</label>
                  <input type='text' defaultValue={inputs.tpost} className='form-control' name="tpost" id='tpost'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='timage'>Photo</label>
                  <input type='file' onChange={handelFile} className='form-control' name="timage" id='timage'/>
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


export default Teacher;
