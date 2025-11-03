import React, {useEffect, useState} from 'react';
import axios from './component/axios'
import {useNavigate} from 'react-router-dom';

function Login() {
    const nevigate = useNavigate();

    const handleSubmit=async(e) => {
        e.preventDefault();
        let datas = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        try {
            let url = 'login';
            let response = await axios ({
                method: 'post',
                responsiveType: 'json',
                url: url,
                data: datas
            });
            if(response.data.jwt){
                sessionStorage.setItem("access_token", response.data.jwt);
                sessionStorage.setItem("userdata", response.data.datas);
                 window.location.href = '/admin/dashboard';
            }else{
                alert(response.data.message);
            }
        }
        catch(e){
            console.log(e);
        }
    }
  return (
   <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://storage.googleapis.com/bukas-website-v3-prd/website_v3/images/Bukas.ph_Choosing_Course_and_College.original.png"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>
          
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="email" name="email" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

         
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="password" name="password" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

         
          <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;