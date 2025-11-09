import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Courses() {
  const [list,setList]=useState([]);// this page main data
  const [cat,setCat]=useState([]);// relational category data. It's used in select box of category
  const [teach,setTeach]=useState([]);// relational category data. It's used in select box of category
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);// image file

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            category_id:'',
            title:'',
            teacher_id:'',
            post:'',
            age:'',
            time:'',
            capacity:'',
            price:''
        });
        
    setShow(true);
    getCategories();// this is call category to add option in category select box
    getTeacher();// this is call category to add option in category select box
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`courses`)
    setList(res.data);
  }

  const getCategories = async (e) => {
      let res = await axios.get(`categories`)
      setCat(res.data);
  }
  const getTeacher = async (e) => {
      let res = await axios.get(`teacher`)
      setTeach(res.data);
  }

  /* handel image/file */
  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        category_id:e.target.category_id.value,
        title:e.target.title.value,
        teacher_id:e.target.teacher_id.value,
        post:e.target.post.value,
        age:e.target.age.value,
        time:e.target.time.value,
        capacity:e.target.capacity.value,
        price:e.target.price.value
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
        url=`courses/${datas.id}`;
      }else{
        url=`courses`;
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
    getCategories();// this is call category to add option in category select box
    getTeacher();// this is call category to add option in category select box
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`courses?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Courses</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Category</th>
            <th>Title</th>
            <th>Teacher's Name</th>
            <th>Post</th>
            <th>Age</th>
            <th>Time</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.cat_name}</td>
              <td>{d.title}</td>
              <td>{d.tname}</td>
              <td>{d.post}</td>
              <td>{d.age}</td>
              <td>{d.time}</td>
              <td>{d.capacity}</td>
              <td>{d.price}</td>
              <td><img src={`${process.env.REACT_APP_API_URL}${d.image}`} width="100px"/></td>
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
                  <label htmlFor='category_id'>Category </label>
                  {cat.length > 0 && (
                  <select defaultValue={inputs.category_id} className='form-control' name="category_id" id='category_id'>
                    <option value="">Select Category</option>
                      {cat.map((d, key) =>
                        <option key={d.id} value={d.id}>{d.name}</option>
                      )}
                  </select>
                  )}
              </div>
              <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input type='text' defaultValue={inputs.title} className='form-control' name="title" id='title'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='teacher_id'>Teacher's Name</label>
                  {teach.length > 0 && (
                  <select defaultValue={inputs.teacher_id} className='form-control' name="teacher_id" id='teacher_id'>
                    <option value="">Select Teacher</option>
                      {teach.map((d, key) =>
                        <option key={d.id} value={d.id}>{d.tname}</option>
                      )}
                  </select>
                  )}
              </div>
              
              <div className='form-group'>
                  <label htmlFor='post'>Teacher's Post</label>
                  <input type="text" defaultValue={inputs.post} className='form-control' name="post" id='post'></input>
              </div>
              <div className='form-group'>
                  <label htmlFor='age'>Age</label>
                  <input type="text" defaultValue={inputs.age} className='form-control' name="age" id='age'></input>
              </div>
              <div className='form-group'>
                  <label htmlFor='Time'>Time</label>
                  <input type="time" defaultValue={inputs.time} className='form-control' name="time" id='time'></input>
              </div>
              <div className='form-group'>
                  <label htmlFor='capacity'>Capacity</label>
                  <input type="text" defaultValue={inputs.capacity} className='form-control' name="capacity" id='capacity'></input>
              </div>
              <div className='form-group'>
                  <label htmlFor='price'>Price</label>
                  <input type='text' defaultValue={inputs.price} className='form-control' name="price" id='price'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='image'>Photo</label>
                  <input type='file' onChange={handelFile} className='form-control' name='image' id='image'/>
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


export default Courses;
