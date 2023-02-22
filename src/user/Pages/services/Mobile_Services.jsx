import React from 'react'
import { NavLink } from 'react-router-dom'

const Mobile_Services = () => {
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
                                <li>Mobile Services</li>
                            </ul>
                            <h1>Mobile Services</h1>
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
                                <h3>MOBILE SERVICES OFFERED AT TECHNEXT TECHNOSOFT MOBILE APP DEVELOPMENT COMPANY</h3>
                                <p>In today's busy life, no one has the time to pull up a website through a browser. After all, using an app is much faster and easier. So, adding an app to your company website will give you a market edge and allow you to compete better with your market peers.
                                    <br/>At Technext Technosoft mobile app development company in Durgapur, we will ensure that you have the market edge. Our trained and experienced mobile application developers will create the app you need. So whether you need an application solution for Android, iOS, Windows or Blackberry, we can make it all for you.
                                </p>
                            </div>
                            <div>
                                <div className='planing-content'>
                                    <h3> FOR WHAT PLATFORMS DO WE DEVELOP MOBILE APPS?</h3>
                                    <p className="ri-check-double-line">iOS</p>
                                    <p className="ri-check-double-line"> Android </p>
                                    <p className="ri-check-double-line">Windows</p>
                                    <p className="ri-check-double-line">BlackBerry</p>
                                </div>
                            </div>
                            <div className="service-description">
                                <h3>WHY SHOULD YOU CHOOSE US?</h3>
                            </div>
                            <div className="planing-content">  
                                <h3 className="ri-check-double-line">Customized Mobile App</h3>
                                <p>Our mobile app development company in Durgapur has experienced HTML , JAVA, PHP, SWIFT, SQL, XCODE, XAMARIN, IONIC, APPERY.IO developers. So we will bring to life what you envision for your business.</p>
                                 
                                <h3 className="ri-check-double-line">Cross-Platform Compatibility</h3>
                                <p>Our experienced mobile app developers in Durgapur can build scalable, quality, and customized applications that run on any device. So whether it is your smart phone, tablet, or any other device, the application will run smoothly in all.</p>
                                
                                <h3 className="ri-check-double-line">Mobile App Consultation Solution</h3>
                                <p>Our trained mobile app consulting team will give you proper app solutions after carefully considering your business domain and size. We will ensure that our ideas optimize and perfect your application further.</p>

                                <h3 className="ri-check-double-line">Quick Turnaround Time</h3>
                                <p>At our mobile app development company in Durgapur, our developers create functional and customized applications promptly. So you will get high-quality, tested, and launch-ready applications within a reasonable time limit.</p>

                                <h3 >What Other Mobile Services We Offer?</h3>

                                <h3 className="ri-check-double-line">Mobile E-Publishing</h3>
                                <p>Technext Technosoft develops electronic mobile publication solutions that can transform any content into digital books. Our core team will help optimize your entire content for mobile-web users by adjusting the text, audio, video, image, and more. Along with this, we will also help monitor your digital growth by tracking the audience you reach and the time you reach it in.</p>

                                <h3 className="ri-check-double-line">Mobile Websites</h3>
                                <p>
                                Our team of experienced mobile app developers in Durgapur will create compatible websites as per your needs. We will customize your site according to your business and the platforms you are planning on using.<br/>At Technext Technosoft, our mobile app developers in Durgapur will fulfill all of your mobile application demands at cost-effective rates. Whatever the app you want, our team will customize it according to your wishes. So don't hesitate, contact us now and see your idea become a reality.
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

export default Mobile_Services