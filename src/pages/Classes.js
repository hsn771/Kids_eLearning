import React, { useEffect, useState } from 'react';
import Weblayout from "../layout/weblayout";
import axios from '../admin/component/axios';
import { CartProvider, useCart } from "react-use-cart";
import { TiShoppingCart } from 'react-icons/ti';

function Classes() {
    const [courses,setCourses]=useState([]);
   useEffect(() => {
       getCourses();
     }, []);
   
     const getCourses = async (e) => {
       let res = await axios.get(`front_api/courses.php`)
       setCourses(res.data);
     }

     const { addItem } = useCart();
    return(
        <>
        <Weblayout>
        <div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Courses</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Courses</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Learning Courses</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    {courses.length > 0 && courses.map((d, key) =>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src={`${process.env.REACT_APP_API_URL}${d.image}`} alt=""/>
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">{d.title}</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt="" style={{width: '45px', height: '45px'}}/>
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">{d.name}</h6>
                                                <small>Teacher</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3" href="">{d.price}</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Age:</h6>
                                                <small>{d.age}</small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">Time:</h6>
                                                <small>{d.time}</small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Capacity:</h6>
                                                <small>{d.capacity}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-1">
                                        <button onClick={() => addItem(d)}>
                                           <TiShoppingCart size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                   )}
                </div>
            </div>
        </div>
       
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">Make Appointment</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name"/>
                                                <label for="gname">Gurdian Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email"/>
                                                <label for="gmail">Gurdian Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cname" placeholder="Child Name"/>
                                                <label for="cname">Child Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cage" placeholder="Child Age"/>
                                                <label for="cage">Child Age</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '100px'}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="assets/img/appointment.jpg" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-5">
                        <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg" style={{width: '90px', height: '90px'}}/>
                            <div className="ps-3">
                                <h3 className="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-5">
                        <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg" style={{width: '90px', height: '90px'}}/>
                            <div className="ps-3">
                                <h3 className="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-5">
                        <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg" style={{width: '90px', height: '90px'}}/>
                            <div className="ps-3">
                                <h3 className="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Weblayout>
        </>
    )
}

export default Classes;