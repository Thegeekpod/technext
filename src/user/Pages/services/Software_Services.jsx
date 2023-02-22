import React from 'react'
import { NavLink } from 'react-router-dom'

const Software_Services = () => {
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
                                <li>Software Services</li>
                            </ul>
                            <h1>Software Services</h1>
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
                                <h3>TECHNEXT TECHNOSOFT SOFTWARE DEVELOPMENT COMPANY IN DURGAPUR</h3>
                                <p>Are you planning on selling your products online? Then you will need a sleek and functioning website to draw in customers and ensure that they keep visiting.
                                  At Technext Technosoft, we offer software development services in Durgapur that are secure, scalable, and technology-driven. Our developers will provide affordable and customized software solutions for any business type and size.</p>
                            </div>
                            <div className="service-description">
                                <h3>WHY SHOULD YOU CHOOSE TECHNEXT TECHNOSOFT SOFTWARE DEVELOPMENT COMPANY IN DURGAPUR?</h3>
                            </div>
                            <div className="planing-content">  
                                <h3 className="ri-check-double-line">CUSTOMIZED BUSINESS SOLUTIONS</h3>
                                <p>We are one of the top custom software development companies in Durgapur. So we offer high-end professional web design and application solutions. Whatever your vision, our experienced and skilled designers will make it a reality. We will provide the e-commerce site you want and that too equipped with the latest tech tools and software.</p>
                                 
                                <h3 className="ri-check-double-line">OFFSHORE DEVELOPMENT</h3>
                                <p>We are the leading Offshore Development Center in India or ODC. With us, you will get a higher return on your investments. Also outsourcing your IT needs will allow you to focus on your core business better.</p>
                                
                                <h3 className="ri-check-double-line">EXPERIENCED DEVELOPERS</h3>
                                <p>Our experienced professional software developers in Durgapur will make use of software platforms like ASP.Net, HTML 5, Java, PHP, Microsoft.Net, and more for developing your IT-powered business.</p>

                                <h3 className="ri-check-double-line">SOFTWARE UP-GRADATION</h3>
                                <p>Our professional software developers in Durgapur will upgrade your application and ensure that it can perform competitively with other market apps. We will also ensure that there are no bugs, lags, or defects.</p>

                                <h3 className="ri-check-double-line">SOFTWARE TESTING</h3>
                                <p>At Technext Technosoft software development company in Durgapur, our expert professionals will select models and define the test goals within your schedule and budget. Note that we follow a flexible, timely, no bugs, and absolute-quality policy. After all, perfection within the stipulated timeframe is our aim.</p>

                                <h3 className="ri-check-double-line">EMBEDDED TESTING</h3>
                                <p>Our expert software developers in Durgapur will check the functional and non-functional attributes of your application. For this, we will make use of accurate and latest tools. Also, our developers will finish testing the final version within a set period. In the end, we will make sure that your end product is fully defect-free.</p>

                                <h3 className="ri-check-double-line">SOFTWARE MAINTENANCE AND SUPPORT</h3>
                                <p>Our software support team offers corrective support as well as a preventative action. So we will ensure that your application remains stable and runs at its optimum capacity without bugs or defects.

Our experienced developers will also add enhancements that will help fix errors after detecting them. These additions will make the platform more optimized and equipped for handling future instabilities.

At our software development company in Durgapur, we will develop, test, and deploy cost-effective launch-ready applications. Also our developers will provide you with scalable and customized software solutions. So contact us now to get the best software web solutions for your business.</p>


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

export default Software_Services