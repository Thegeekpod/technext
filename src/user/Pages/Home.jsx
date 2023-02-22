import React from 'react'

const Home = () => {
    const script = document.createElement('script');
    let url ='assets/js/custom.js';
    script.src = url;   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  return (
    <>
    <title>Technext Technosoft private Limited</title>
    {/* <!--Start banner Area--> */}
<div className="banner-area">
    <div className="hero-slider owl-carousel owl-theme">
        <div className="slider-item bg-1">
            <div className="container-fluid">
                <div className="banner-content">
                    <h1>Create Your Own Novelty And Digital Future</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim vitae risus non, imperdiet pharetra lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                    <div className="banner-btn">
                        <a href="contact-us.html" className="default-btn btn active mr-20">Contact Us <i className="ri-arrow-right-line"></i></a>
                        <a href="contact-us.html" className="default-btn btn style-2">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-item bg-2">
            <div className="container-fluid">
                <div className="banner-content">
                    <h1>The Smartest Way Serve Digital Marketing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim vitae risus non, imperdiet pharetra lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                    <div className="banner-btn">
                        <a href="contact-us.html" className="default-btn btn active mr-20">Contact Us <i className="ri-arrow-right-line"></i></a>
                        <a href="contact-us.html" className="default-btn btn style-2">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-item bg-3">
            <div className="container-fluid">
                <div className="banner-content">
                    <h1> We Build Website and Mobile Application </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim vitae risus non, imperdiet pharetra lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                    <div className="banner-btn">
                        <a href="contact-us.html" className="default-btn btn active mr-20">Contact Us <i className="ri-arrow-right-line"></i></a>
                        <a href="contact-us.html" className="default-btn btn style-2">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End banner Area--> */}

{/* <!--Start About Area--> */}
<div className="about-area ptb-100">          
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="about-image-content pr-15">
                    <img src="assets/images/about/about-img-1.png" alt="Image"/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-content pl-15">
                    <div className="about-title">
                        <span>About The Company</span>
                        <h2>We Are The Administration's Best Marketing Team</h2>
                    </div>

                    <div className="about-features">
                       <ul>
                           <li>
                               <div className="icon">
                                    <i className="ri-check-double-line"></i>
                               </div>
                               <h3>Web Solutions:</h3>
                               <p>We are one of the top ranking website development company. We guarantee 24/7 server monitoring support, web hosting, Email hosting, etc. If you entrust us with the responsibilities of your web hosting, Email hosting, etc, be rest assured that you will get the best in class services.</p>
                           </li>
                           <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>Custom Software:</h3>
                                <p>We provide customized software solutions and software development services,that support unique combinations of applications and platforms.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>SEO:</h3>
                                <p>At technext we provide top of the line SEO services and digital marketing services. Be rest assured that in google and other major search engines, your website or blog will remain at the top most position.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>Cloud Computing:</h3>
                                <p>On demand computing resources can be easily provided by us, through “ Cloud Computing”. This includes everything from, applications to data centers over the internet.</p>
                            </li>
                       </ul>
                    </div>
                    <a href="about-us.html" className="default-btn btn">Explore More <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End About Area--> */}
{/* <!--Start Services Area--> */}
<div className="services-area bg-f4fbf6 pt-100 pb-70">
    <div className="container">
        <div className="section-title">
            <span>Our Services</span>
            <h2>Discover The Services We Offer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
        </div>

        <div className="row">
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-1.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Website Designing</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>01</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-2.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Website Development</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>02</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-3.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>App Development</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>03</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-4.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>04</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-1.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Degital Marketing</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>05</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-2.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Web Hosting</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>06</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-3.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Website Maintenance</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>07</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                <div className="single-services-card">
                    <div className="services-img">
                        <img src="assets/images/services/services-img-4.png" alt="Image"/>
                    </div>
                    <div className="services-content">
                        <h3>Software Solution</h3>
                        <p>Lorem ipsum dolor consectet adipisci elit. Morbi lacus, Sed ut lacus aliquet, egestas.</p>
                        <a href="services-style-one.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                    <div className="number">
                        <span>08</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End Services Area--> */}
  {/* <!--Start Page Header Area--> */}
<div className="page-header-area bg-f4fbf6">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
                <div className="page-header-content">
                    <h2>Technext Technosoft is a Milestone.</h2>
                    <h6>We are a fastest growing privately funded, privately held ITES and Software Development Services Organization.</h6>
                    <p>Since 2012, Technext Technosoft has built long-standing and successful relationship all over the world with multiple clients. Our Clients continue with our services as they consider us a smart investment for success. We have a team of dedicated experts whose main focus is customer delight and not just customer satisfaction. That’s why we give our 100% effort to rise above and beyond your expectations and provide our best services. We also believe in healthy partnership, where our experts can collaborate and support your team for an all round positive outcome in a healthy interactive platform, which provides as a learning base to us as well as our consulting partners.</p>
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="page-header-image">
                    <img src="assets/images/banner/banner-img-3.png" alt="Image"/>
                </div>
            </div>
        </div>

        <div className="page-header-shape">
            <img src="assets/images/shape/shape-8.png" alt="Image"/>
            <img src="assets/images/shape/shape-9.png" alt="Image"/>
            <img src="assets/images/shape/shape-10.png" alt="Image"/>
        </div>
    </div>
</div>
{/* <!--End Page Header Area--> */}
{/* <!--Start Who We area--> */}
<div className="who-we-are-area ptb-100">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="who-we-are-content pr-15">
                    <div className="who-we-are-title">
                        <span>Who We Are</span>
                        <h2>Our Professional Creative Digital Representation Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                    </div>

                    <div className="who-we-are-features">
                       <ul>
                           <li>
                               <div className="icon">
                                    <i className="ri-check-double-line"></i>
                               </div>
                               <h3>Inspired Design Decisions With Otto Storch Ideas</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus,
                                lorem. Sed ut lacus aliquet, volutpat egestas.</p>
                           </li>
                           <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>Announcing Smashing Online Workshops</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus,
                                lorem. Sed ut lacus aliquet, volutpat egestas.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>How Should Designers Learn To Code Terminal</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus,
                                lorem. Sed ut lacus aliquet, volutpat egestas.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="ri-check-double-line"></i>
                                </div>
                                <h3>Easy Solutions To Your IT Problems</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus,
                                lorem. Sed ut lacus aliquet, volutpat egestas.</p>
                            </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="who-we-are-img pl-15">
                    <img src="assets/images/choose/choose-img-1.png" alt="Image"/>
                    <div className="shape-1">
                        <img src="assets/images/shape/shape-1.png" alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End Who We area--> */}
{/* <!--Start Projects Area--> */}
<div className="project-area pt-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="project-slider owl-carousel owl-theme">
                    <div className="single-project-card">
                        <img src="assets/images/project/project-img-1.png" alt="Image"/>
                        <div className="project-content">
                            <span>Business</span>
                            <h3>Staffing Solutions</h3>
                        </div>
                    </div>
                    <div className="single-project-card">
                        <img src="assets/images/project/project-img-2.png" alt="Image"/>
                        <div className="project-content">
                            <span>Business</span>
                            <h3>Staffing Solutions</h3>
                        </div>
                    </div>
                    <div className="single-project-card">
                        <img src="assets/images/project/project-img-3.png" alt="Image"/>
                        <div className="project-content">
                            <span>Business</span>
                            <h3>Staffing Solutions</h3>
                        </div>
                    </div>
                    <div className="single-project-card">
                        <img src="assets/images/project/project-img-4.png" alt="Image"/>
                        <div className="project-content">
                            <span>Business</span>
                            <h3>Staffing Solutions</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="works-content">
                    <div className="works-title">
                        <span>Our Works</span>
                        <h2>Technext Technosoft is a Milestone.</h2>
                        <p>Elit readablei content of a page when looking at it layout Sed ut lacus aliquet, volutpat egestas nisl.</p>
                        <p>Lorem ipsum dolor site amet, consectetur adipiscing elit. readable content of a page when looking at it layout Sed ut lacus aliquet, volutpat egestas nisl.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-shape-one">
            <img src="assets/images/shape/shape-2.png" alt="Image"/>
        </div>
        <div className="project-shape-two">
            <img src="assets/images/shape/shape-3.png" alt="Image"/>
        </div>
    </div>
</div>
{/* <!--End Projects Area--> */}

{/* <!--Start Skill Area--> */}
<div className="skill-area bg-f4fbf6 pt-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="skill-content pr-20">
                    <div className="skill-title">
                        <span>Best Skills</span>
                        <h2>We Are A Very Experienced And Professional Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                    </div>
                    <div className="skill-bar" data-percentage="80%">
                        <h4 className="progress-title-holder">
                            <span className="progress-title">Creative Design</span>
                            <span className="progress-number-wrapper">
                                <span className="progress-number-mark">
                                    <span className="percent"></span>
                                    <span className="down-arrow"></span>
                                </span>
                            </span>
                        </h4>

                        <div className="progress-content-outter">
                            <div className="progress-content"></div>
                        </div>
                    </div>

                    <div className="skill-bar" data-percentage="60%">
                        <h4 className="progress-title-holder clearfix">
                            <span className="progress-title">Product Engineering</span>
                            <span className="progress-number-wrapper">
                                <span className="progress-number-mark">
                                    <span className="percent"></span>
                                    <span className="down-arrow"></span>
                                </span>
                            </span>
                        </h4>

                        <div className="progress-content-outter">
                            <div className="progress-content"></div>
                        </div>
                    </div>

                    <div className="skill-bar" data-percentage="90%">
                        <h4 className="progress-title-holder clearfix">
                            <span className="progress-title">Support & Tips</span>
                            <span className="progress-number-wrapper">
                                <span className="progress-number-mark">
                                    <span className="percent"></span>
                                    <span className="down-arrow"></span>
                                </span>
                            </span>
                        </h4>

                        <div className="progress-content-outter">
                            <div className="progress-content"></div>
                        </div>
                    </div>
                    <div className="skill-bar" data-percentage="75%">
                        <h4 className="progress-title-holder clearfix">
                            <span className="progress-title">Marketing Strategy</span>
                            <span className="progress-number-wrapper">
                                <span className="progress-number-mark">
                                    <span className="percent"></span>
                                    <span className="down-arrow"></span>
                                </span>
                            </span>
                        </h4>

                        <div className="progress-content-outter">
                            <div className="progress-content"></div>
                        </div>
                    </div>
                    <div className="skill-bar mb-0" data-percentage="55%">
                        <h4 className="progress-title-holder clearfix">
                            <span className="progress-title">Recruitment</span>
                            <span className="progress-number-wrapper">
                                <span className="progress-number-mark">
                                    <span className="percent"></span>
                                    <span className="down-arrow"></span>
                                </span>
                            </span>
                        </h4>

                        <div className="progress-content-outter">
                            <div className="progress-content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="skill-image">
                    <img src="assets/images/skill/skill-img-1.png" alt="Image"/>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End Skill Area--> */}
{/* <!--Start Testimonials Area--> */}
<div className="testimonials-area ptb-100">
    <div className="container">
        <div className="section-title">
            <span>Client Reviews</span>
            <h2>What People Say About Our Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
        </div>
        <div className="testimonials-slider owl-carousel owl-theme">
            <div className="single-testimonials-card">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <img src="assets/images/testimonials/testimonials-img-1.jpg" alt="Image"/>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="testimonials-content">
                            <p>“Lorem ipsum dolor sit amet, consectetu
                            adipiscing morbi lacus, dignissim pharea
                            lorem. Sed lacus aliquet, volutpat sem
                            pellentesque, egestas nisl.”</p>
                            <ul className="ratings-list">
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                            </ul>
                            <h3>Madge Marvin</h3>
                            <span>Creative Designer</span>

                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-testimonials-card">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <img src="assets/images/testimonials/testimonials-img-2.jpg" alt="Image"/>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="testimonials-content">
                            <p>“Lorem ipsum dolor sit amet, consectetu
                            adipiscing morbi lacus, dignissim pharea
                            lorem. Sed lacus aliquet, volutpat sem
                            pellentesque, egestas nisl.”</p>
                            <ul className="ratings-list">
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                            </ul>
                            <h3>Ayden Stehr</h3>
                            <span>CEO & Founder</span>
                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-testimonials-card">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <img src="assets/images/testimonials/testimonials-img-1.jpg" alt="Image"/>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="testimonials-content">
                            <p>“Lorem ipsum dolor sit amet, consectetu
                            adipiscing morbi lacus, dignissim pharea
                            lorem. Sed lacus aliquet, volutpat sem
                            pellentesque, egestas nisl.”</p>
                            <ul className="ratings-list">
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                            </ul>
                            <h3>Madge Marvin</h3>
                            <span>Creative Designer</span>

                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-testimonials-card">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <img src="assets/images/testimonials/testimonials-img-2.jpg" alt="Image"/>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="testimonials-content">
                            <p>“Lorem ipsum dolor sit amet, consectetu
                            adipiscing morbi lacus, dignissim pharea
                            lorem. Sed lacus aliquet, volutpat sem
                            pellentesque, egestas nisl.”</p>
                            <ul className="ratings-list">
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                                <li><i className="flaticon-star-3"></i></li>
                            </ul>
                            <h3>Ayden Stehr</h3>
                            <span>CEO & Founder</span>
                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!--End Testimonials Area--> */}
{/* <!--Start Blog Area--> */}
{/* <div className="blog-area pt-100 pb-70">
    <div className="container">
        <div className="section-title">
            <span>News & Blog</span>
            <h2>Check Out Our Latest Blog Post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                <div className="single-blog-card">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src="assets/images/blog/blog-img-1.jpg" alt="Image"/></a>
                        <div className="date">
                            <p>09</p>
                            <span>May</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <ul>
                            <li>
                                <i className="ri-user-heart-line"></i>
                                By <a href="blog-grid.html">Admin</a>
                            </li>
                            <li>
                                <i className="ri-price-tag-3-line"></i>
                               <a href="blog-grid.html">Latest News</a>
                            </li>
                        </ul>
                        <h3><a href="blog-details.html">The Standard Of Business Agency</a></h3>
                        <p>It is a long established fact that a reader will
                        be distracted by the readable content a page
                        when looking at its.</p>
                        <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <div className="single-blog-card">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src="assets/images/blog/blog-img-2.jpg" alt="Image"/></a>
                        <div className="date">
                            <p>09</p>
                            <span>May</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <ul>
                            <li>
                                <i className="ri-user-heart-line"></i>
                                By <a href="blog-grid.html">Admin</a>
                            </li>
                            <li>
                                <i className="ri-price-tag-3-line"></i>
                                <a href="blog-grid.html">Latest News</a>
                            </li>
                        </ul>
                        <h3><a href="blog-details.html">Use Meta Benefit To Make Easier</a></h3>
                        <p>It is a long established fact that a reader will
                        be distracted by the readable content a page
                        when looking at its.</p>
                        <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                <div className="single-blog-card">
                    <div className="blog-img">
                        <a href="blog-details.html"><img src="assets/images/blog/blog-img-3.jpg" alt="Image"/></a>
                        <div className="date">
                            <p>09</p>
                            <span>May</span>
                        </div>
                    </div>
                    <div className="blog-content">
                        <ul>
                            <li>
                                <i className="ri-user-heart-line"></i>
                                By <a href="blog-grid.html">Admin</a>
                            </li>
                            <li>
                                <i className="ri-price-tag-3-line"></i>
                                <a href="blog-grid.html">Latest News</a>
                            </li>
                        </ul>
                        <h3><a href="blog-details.html">Advertise Report That Make Your</a></h3>
                        <p>It is a long established fact that a reader will
                        be distracted by the readable content a page
                        when looking at its.</p>
                        <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
{/* <!--End Blog Area--> */}


{/* <!--Start FAQ Area--> */}
<div className="faq-area pt-100 pb-70">
    <div className="container">
        <div className="section-title">
            <h2>FAQ’s</h2>
        </div>
        <div className="row">
<div className="col-sm">
<div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="faq-content">
                    <div className="faq-accordion">
                        <div className="accordion">
                            <div className="accordion-item">
                                <div className="accordion-title active">
                                    <i className='flaticon-plus'></i>
                                    How much it can cost a new website??
                                </div>
    
                                <div className="accordion-content show">
                                    <p>Website development cost varies with different platform and customer-specific requirements. A basic informative website will cost starts from 10,000 INR while an E-commerce website can cost you around 30,000-70,000 INR. Try for experienced and expert development professionals to take all the worries.</p>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Do you provide website redesigning services?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Website redesign is a service updating your site's usability, design, and functionalities. This requires help and assistance from both the design and development team to work and match your brand for a better user experience. Yes, you can have website redesigning services from our expert website design professionals. The idea behind is to make sure about functionalities and all other things related to a website.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                   Can I buy a domain name for myself?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Anyone wishing to purchase a domain name can make a purchase through a domain name registrar. Portals like A2, Namecheap, and GoDaddy can provide you with domain charging a fee. Domain hosting is known as a service to host a domain for your website. It is quite different from web hosting that can provide purchasing web and domain hosting from the same place.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Do you provide services for new websites after the launching?
                                </div>
    
                                <div className="accordion-content">
                                    <p>When you are done with launching your own website it is essential to find ways to attract more people to it. You need to put on some marketing to-do list after the launch and have maintenance services on time. Yes, our expert assistance and services are available to provide you with robust solutions. Frequently updated and high-quality content like events, company blogs, and on-page content can help you boost the traffic inside.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Can you help convert my website into WordPress?
                                </div>
    
                                <div className="accordion-content">
                                    <p>It is possible to convert HTML/ PHP website code into a WordPress website. It is no longer a difficult job to convert your website to WordPress. Our expert developers can best utilize this robust tool to create and manage your website as desired. Whether it is a blog, personal website, or a business website you can contact for any website services you need.</p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Can my website also work on tablets and smartphones as well?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Mobile phones and tablets are an inseparable part of our life and are responsible for 51.53% of website traffic. So, it is important for your websites to be functional on mobile phone devices as well. We are focused on providing a seamless experience to the users with a mobile-friendly website experience. All you need is to consider compatible and responsive designs aiding the best experience for your customers.</p>
                                </div>
                            </div>
                           
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<div className="col-sm">
<div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="faq-content">
                    <div className="faq-accordion">
                        <div className="accordion">
                            <div className="accordion-item">
                                <div className="accordion-title active">
                                    <i className='flaticon-plus'></i>
                                    Do you provide services for online marketing?
                                </div>
    
                                <div className="accordion-content show">
                                    <p>Online marketing is known as a professional service helpful advertising and marketing online business with social media, search engines, and paid channels. Have our services to get the get possible business leads from different platforms. We do not limit ourselves to any specific industry but rather serve companies of all sizes and shapes. We are about to become a partner with an understanding of your market and business goals.</p>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    How long it can take to have desired results from SEO?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Search Engine Optimization is totally different from other popular channels of marketing. It just doesn't work instantly rather needs a possible time. With our expert SEO professionals, it can take as low as 2 months to get the desired rank it also can take up to 12 months to rank on the first page. Based on business competition and SEO strategy you are about to experience a considerable result within 6 to 12 months.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Do you provide help my website to rank higher on Google?
                                </div>
    
                                <div className="accordion-content">
                                    <p>SEO is a term that implies specific strategies for web pages appearing on search engine results. This requires performing the best practices for effective SEO functionalities. Get the best services for boosting your site's position on search engines and have results with more business revenues. All you need ranking driving authoritative content, and quality best practices driving the best ranking and results.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Can you provide graphic design services and make a logo for me?
                                </div>
    
                                <div className="accordion-content">
                                    <p>It is critical to stay updated with the world of design. Graphics design is the process of creating visual content with typography, pictures, photos, icons, etc. All you need is to determine the best available way to cope with audiences in the form of shapes, colors, and pictures. This is about making your idea and content trustworthy and professional to expand services and drive sales. You can connect with us to get the best available graphic designs services.</p>
                                </div>
                            </div>
    
                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    Do you provide IT services for international customers?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Information technology is about connecting people around the world in many different forms. Our teams of experts are dealing with businesses of all shapes and sizes providing the best possible practices as essential. Connect with us to get website design and development, software development, and digital marketing services to your doorstep. We provide services internationally and drive businesses to gain the best possible efficiency and smoothness possible. Get our personalized services and solutions and build your growth.</p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <div className="accordion-title">
                                    <i className='flaticon-plus'></i>
                                    If I need IT support, can you help provide solutions?
                                </div>
    
                                <div className="accordion-content">
                                    <p>Whether it is about developing a new website or facing trouble with IT things we are here to help you out. We can help you by providing technology tools you use in busies every day. So, if you are looking for an IT service provider can contact us 24*7. Our customized website design and development, software development, and digital marketing services can lead your growth to the next possible level.</p>
                                </div>
                            </div>
                            
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
        
    </div>
</div>


{/* <!--End FAQ Area--> */}</>
  )
}

export default Home