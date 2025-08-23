import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Weblayout from "../layout/weblayout";

function ThankYou() {
  const { order_id } = useParams();

  return (
    <Weblayout>
      {/* Banner Section */}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Enrollment Successful!</h2>
                <p>Thank you for choosing our courses</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="thank_you_area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="thank_you_content text-center">
                <div className="success_icon mb-4">
                  <i className="fas fa-check-circle" style={{fontSize: '80px', color: '#28a745'}}></i>
                </div>
                
                <h1 className="mb-3">Thank You for Your Enrollment!</h1>
                <p className="lead mb-4">
                  Your course enrollment has been successfully processed. We've sent a confirmation email with your course details.
                </p>
                
                <div className="order_info alert alert-info mb-4">
                  <h4 className="mb-2">Order Number: #{order_id}</h4>
                  <p className="mb-0">Please keep this number for your records.</p>
                </div>

                <div className="action_buttons mb-5">
                  <Link to={`/invoice/${order_id}`} className="main_btn mr-3">
                    <i className="fas fa-receipt mr-2"></i>View Invoice
                  </Link>
                </div>

                <div className="next_steps">
                  <h4 className="mb-4">What happens next?</h4>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="step_icon mb-3">
                        <i className="fas fa-envelope" style={{fontSize: '40px', color: '#007bff'}}></i>
                      </div>
                      <h5>Confirmation Email</h5>
                      <p>You'll receive a confirmation email with course access details.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="step_icon mb-3">
                        <i className="fas fa-user-graduate" style={{fontSize: '40px', color: '#007bff'}}></i>
                      </div>
                      <h5>Course Access</h5>
                      <p>Access your courses through your student dashboard.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="step_icon mb-3">
                        <i className="fas fa-headset" style={{fontSize: '40px', color: '#007bff'}}></i>
                      </div>
                      <h5>Support</h5>
                      <p>Our support team is available if you need any assistance.</p>
                    </div>
                  </div>
                </div>

                <div className="contact_support mt-5">
                  <p className="mb-2">Need immediate assistance?</p>
                  <p className="mb-0">
                    <i className="fas fa-phone-alt mr-2"></i>
                    Call us: <strong>+880 1234 567890</strong>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2"></i>
                    Email: <strong>support@potter.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add some custom CSS */}
      <style jsx>{`
        .thank_you_area {
          padding: 100px 0;
        }
        .success_icon {
          animation: bounce 1s;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-30px);}
          60% {transform: translateY(-15px);}
        }
        .main_btn, .white_btn {
          padding: 12px 30px;
          margin: 0 10px;
        }
        .white_btn {
          background: #fff;
          color: #007bff;
          border: 1px solid #007bff;
        }
        .white_btn:hover {
          background: #007bff;
          color: #fff;
        }
      `}</style>
    </Weblayout>
  );
}

export default ThankYou;