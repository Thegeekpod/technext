import React from 'react'

const Pricing = () => {
    const script = document.createElement('script');
    let url ='assets/js/custom.js';
    script.src = url;   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  return (
    <>
   
    {/* // <!--Start Page Header Area--> */}
    <div className="page-header-area bg-f4fbf6">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="page-header-content">
                        <h1>Our Pricing Plan</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
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

    {/* <!--Start Pricing Area--> */}
    <div className="pricing-area ptb-100 pb-70">
        <div className="container">
            <div className="section-title">
                <span>Price Plan</span>
                <h2>Get Started For Free & Add A Plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
            </div>
            <div className="plans-switcher">
                <div className="switcher-box">
                    <label className="toggler toggler--is-active" id="filt-monthly"> Monthly</label>
                    <div className="toggle">
                        <input type="checkbox" id="switcher" className="check"/>
                        <b className="b switch"></b>
                    </div>
                    <label className="toggler" id="filt-yearly">Yearly</label>
                </div>
            </div>
            <div id="monthly" className="wrapper-full">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-card">
                            <div className="pricing-head-content">
                                <h3>Basic</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$29.00 <span>/Monthly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line white"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-card active">
                            <div className="pricing-head-content">
                                <h3>Intermediate</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$49.00 <span>/Monthly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line white"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-pricing-card">
                            <div className="pricing-head-content">
                                <h3>Expert</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$79.00 <span>/Monthly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="yearly" className="wrapper-full hide">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card">
                            <div className="pricing-head-content">
                                <h3>Basic</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$129.00 <span>/Yearly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line white"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card active">
                            <div className="pricing-head-content">
                                <h3>Intermediate</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$249.00 <span>/Yearly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line white"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line white"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-card">
                            <div className="pricing-head-content">
                                <h3>Expert</h3>
                                <p>Free trial. No credit card is required. Cancel at
                                 any time. There are many variations.</p>
                                <h1>$479.00 <span>/Yearly</span></h1>
                            </div>
                            <div className="featurs-list">
                                <ul>
                                    <li><i className="ri-check-double-line"></i>3  Social profiles</li>
                                    <li><i className="ri-check-double-line"></i>12 Team members</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                    <li><i className="ri-check-double-line"></i>5 Competitors per profile</li>
                                    <li><i className="ri-check-double-line"></i>Hashtags per profile</li>
                                </ul>
                            </div>
                            <a href="services-style-one.html" className="default-btn btn">Start Free Trial <i className="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--End Pricing Area--> */}
    </>
  )
}

export default Pricing