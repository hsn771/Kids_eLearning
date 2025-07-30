import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="position-relative">
          <img className="img-fluid" src="assets/img/carousel-1.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white mb-4">The Best Kindergarten School For Your Child</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                  <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Classes</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="position-relative">
          <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white mb-4">Make A Brighter Future For Your Child</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                  <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Classes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
