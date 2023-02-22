import React from 'react'

import Menu from './Menu';



const Header = () => {

  return (
    <>
    {/* <div className="preloader clock text-center">
            <div className="organiaLoader">
                <div className="loaderO">
                <span>T</span>
                <span>E</span>
                <span>C</span>
                <span>H <br/></span>
                
                <span>N</span>
                <span>E</span>
                <span>X</span>
                <span>T</span>
                </div>
            </div>
        </div> */}
        {/* <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner"><span>Drag</span></div> */}
        {/* <!--Start Top Header--> */}
        <div className="tob-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4" style={{padding:'0px'}}>
                        <div className="heder-left-content">
                            <div className="content">
                                <i className="ri-user-voice-line"></i>
                                <p>Welcome To Our Irise Staffing Agency</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className="heder-right-content">
                            <div className="row align-items-center">
                                <div className="col-lg-9 col-md-7">
                                    <div className="time-content">
                                        <i className="ri-time-line"></i>
                                        <p>Sun-Thu: 10 AM to 7 PM - Sat-Fri: Closed</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-5">
                                    {/* <div className="social-content">
                                        <ul>
                                            <li>
                                                <i className="ri-facebook-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-twitter-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-instagram-line"></i>
                                            </li>
                                            <li>
                                                <i className="ri-linkedin-line"></i>
                                            </li>
                                        </ul>
                                    </div> */}

                                   
  <div className="sociall ">
  <i className="ri-facebook-fill fb"></i>
   
    <i className="ri-twitter-fill tw "></i>
    <i className="ri-instagram-fill ins "></i>
    <i className="ri-linkedin-fill lnk "></i>
    
  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Top Header--> */}
        {/* <!-- Start Middle Header --> */}
        <div className="middle-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3" style={{padding:'0px'}}>
                        <div className="middle-header-logo">
                            <img src="assets/images/logo.png" className="logo-1" alt="Logo"/>
                            <img src="assets/images/white-logo.png" className="logo-2" alt="Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <div className="middle-header-right-content">
                            <ul>
                                <li>
                                    <div className="header-contact-box">
                                        <div className="icon">
                                            <i className="flaticon-phone-call-1 nk_nav_icon"></i>
                                        </div>
                                        <p>Call Us Now</p>
                                        <a className='nk_a_1' href="tel:+0408886666">+040 888 6666</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="header-contact-box">
                                        <div className="icon">
                                            <i className="flaticon-mail nk_nav_icon"></i>
                                        </div>
                                        <p>Email Address</p>
                                        <a className='__cf_email__ nk_a_1' href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#95fdf0f9f9fad5dce7fce6f0bbf6faf8"><span data-cfemail="81e9e4ededeec1c8f3e8f2e4afe2eeec">[email&#160;protected]</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="header-contact-box">
                                        <div className="icon">
                                            <i className="flaticon-place nk_nav_icon"></i>
                                        </div>
                                        <p>Address</p>
                                        <span className='nk_a_1'>204 Protector Here, USA</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Middle Header--> */}
        <div className="navbar-area nav-style-1">
            <div className="mobile-responsive-nav">
                <div className="container">
                    <div className="mobile-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo-icon-2.png" className="logo-icon-1" alt="logo"/>
                                <img src="assets/images/logo-icon-2.png" className="logo-icon-2" alt="logo"/>
                                
                                <img src="assets/images/white-logo.png" className="main-logo" alt="logo"/>
                                <img src="assets/images/white-logo.png" className="white-logo" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        
                        <Menu/>
                    </nav>
                </div>
            </div>

            <div className="others-option-for-responsive">
                <div className="container">
                    <div className="dot-menu">
                        <div className="inner">
                            <div className="others-options">
                                
                                {/* <div className="option-item">
                                    <a href="contact-us.html" className="default-btn btn style-2">Get Started</a>
                                </div> */}
                                {/* <div className="option-item">
                                    <div className="switch-box">
                                        <label id="switch2" className="switch">
                                            <input type="checkbox" onchange="toggleTheme()" id="slider2"/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Header