import React from 'react';
import { NavLink } from 'react-router-dom';

const Bpo_Services = () => {
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
                                <li>BPO Services </li>
                            </ul>
                            <h1>BPO Services</h1>
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
                                <h3>BPO SERVICES AT TECHNEXT TECHNOSOFT SOFTWARE DEVELOPMENT COMPANY</h3>
                                <p>At Technext Technosoft we offer BPO support facilities. Our trained technical agents offer chat, call, and email services for your business.<br/>Using our BPO support services, you will be able to sell any add-on services and provide technical support to your customers for any product. Due to this, you will be able to focus on the core aspects of the business.</p></div>
                            <div className="service-description">
                                <h3>WHAT BPO SUPPORT SERVICES DO WE OFFER?</h3>
                            </div>
                            <div className="planing-content">  
                                <h3 className="ri-check-double-line">BPO REMOTE MONITORING SERVICES</h3>
                                <p>AtTechnext Technosoft, BPO company in Durgapur, we offer end-to-end monitoring services. Our trained remote help-desk professionals are proactive and will attend to all operation issues with smart-tools. You can rest assured that we will manage network deterrents effectively.</p>
                                 
                                <h3 className="ri-check-double-line">HIGHLY TRAINED BPO STAFF</h3>
                                <p>Our trained and experienced BPO staff in Durgapur can comfortably handle various kinds of operation errors and network problems. They are dedicated, resourceful, and consistent in their work.</p>
                                
                                <h3 className="ri-check-double-line">24*7 MONITORING SERVICES</h3>
                                <p>Our in-house trained BPO staff in Durgapur provides 24/7 support. We have a proven system of notifications and alerts to monitor customer assistance. So there will never be a moment that your customers will reach out and not get the required assistance they were promised.</p>

                                <h3 className="ri-check-double-line">TECHNICAL TROUBLE TICKET MANAGEMENT</h3>
                                <p>At our BPO company in Durgapur, we make use of a ticketing management system to successfully monitor calls. This tool will automatically take note of the service requests and then generate tickets. <br/>These will then get transferred to the staff member perfectly suited for the request. Our automated tracker will track the ticket till the end of its cycle. You can rest assured that the ticket won't get deleted till the problem gets solved. This latest technology ensures the efficient and effective completion of tasks.</p>
                                
                                <h3 className="ri-check-double-line">ADD ON SALES</h3>
                                <p>At our BPO company in Durgapur, we have trained staff who have domain-specific and customer-specific knowledge. So they can effectively leverage it and engage in efficient up-selling to improve your profits.</p>
                                
                                <h3 className="ri-check-double-line">SHORT SCALABILITY TIME
</h3>
                                <p>Our trained BPO staff in Durgapur will handle all of your ancillary support and sales jobs. As a result, they will be able to foster better customer loyalty in the long term. So this will allow you to establish a brand name with a positive market image.

<br/>
Our BPO company is supported by a resourceful and dedicated staff who are available 24/7 for solving any problem your customers might be facing. To aid them in their task, we make use of smart-tools like the ticketing system. So with the help of technical and human resources, we provide flawless full-time remote assistance all over the globe.
</p>
                                
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

export default Bpo_Services