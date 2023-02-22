import React from 'react'
import { NavLink } from 'react-router-dom'

const Web_Services = () => {
  return (
    <>
    {/* <!--Start Page Header Area--> */}
        <div className="page-header-area bg-f4fbf6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="page-header-content">
                            
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li>Web Services</li>
                            </ul>
                            <h1>Web Services</h1>
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

        {/* <!--Start Details Area--> */}
        <div className="service-details-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="services-details-content">
                            <div className="top-img">
                                <img src="assets/images/services/services-img-16.jpg" alt="Image"/>
                            </div>
                            <div className="analysis-content">
                                <h3>WEB SERVICES BY TECHNEXT TECHNOSOFT WEB DEVELOPMENT COMPANY IN DURGAPUR</h3>
                                <p>At Technext Technosoft web development company in Durgapur, our developers will build you a scalable, flexible, and fully customized website. We will create a flexible and optimized site by using the latest tools available.
                                 We have developed web applications for a satisfied global clientele ranging from the US to Dubai. So whether you are a startup, medium-sized business, or a large enterprise, we provide affordable website solutions to all.</p>
                            </div>
                            <div className="service-description">
                                <h3>WHAT WEB SERVICES ARE OFFERED BY US?</h3>
                            </div>
                            <div className="planing-content">  
                                <h3 className="ri-check-double-line">CUSTOMIZED WEBSITE DESIGNING</h3>
                                <p>Our professional web developers in Durgapur will create a flexible, scalable, and customized site as per your business interests and future roadmap. We will also ensure that it has a rich UI and user-friendly interface as well. You can rest assured that our developers will create every aspect of it from scratch, ranging from the background to its logo.</p>
                                 
                                <h3 className="ri-check-double-line">WEB DEVELOPMENT</h3>
                                <p>Our web development company's skilled and experienced developers will promptly deliver the customized website you want and that too without compromising its quality. We use technologies like ASP, MySQL, PHP, Dot NET; and tools like Adobe Dreamweaver, Quill, Flutter, and Froala Editor to construct the perfect site as per your requirements.
                                Our web development agency in Durgapur can create eCommerce portals, CMS sites, social networking sites, complex internet apps, and more. So whatever your needs and demands, we are well-equipped and experienced to complete it.
                                </p>
                                
                                <h3 className="ri-check-double-line">WEB MAINTENANCE AND ENHANCEMENT</h3>
                                <p>Our web development company in Durgapur will monitor your site and maintain it by carrying out software up-gradations. We will ensure that its database server, security systems, payment gateways, web server, and more are optimized. Also, our maintenance team will ensure that your site never experiences any downtime during peak hours.</p>

                                
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="planing-img">
                                            <img src="assets/images/services/services-img-17.jpg" alt="Image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="planing-img">
                                            <img src="assets/images/services/services-img-18.jpg" alt="Image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Details Area--> */}
    </>
  )
}

export default Web_Services