import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    function refreshPage() {
        window.location.reload(true);
      }
  return (
   <>
   <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/'  className="nav-link" onClick={refreshPage}>
                                     Home            
                                    </NavLink>
                                    
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle"> About Us</a>
                                    <ul className="dropdown-menu" style={{display : 'Block' , width: '0px' ,left : '42px'}}>
                                        <li className="nav-item">
                                            <NavLink to='/about' className="nav-link"><img className="nav_gif" src="assets/images/menulogo/about/about.gif"/> About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/blog' className="nav-link"><img className="nav_gif" src="assets/images/menulogo/about/blog.gif"/> Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink to='/protfolio#'  className="nav-link"><img className="nav_gif" src="assets/images/menulogo/about/protfolio.gif"/> Protfolio</NavLink>
                                        </li>                 
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle  "> Services            
                                    </a>

                                    <ul className="dropdown-menu " style={{display : 'Block' , width: '250px' ,left : '132px'}}>
                                        <li className="nav-item  ">
                                            <NavLink to= '/Software-Services' className="nav-link"><img className="nav_gif" src="assets/images/menulogo/service/software.gif"/>Software Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/web-Services' className="nav-link"><img className="nav_gif" src="assets/images/menulogo/service/webservice.gif"/>Web Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/Mobile-Services' className="nav-link"> <img className="nav_gif" src="assets/images/menulogo/service/mobile.gif"/>Mobile Services</NavLink>
                                        </li>  
                                        <li className="nav-item">
                                            <NavLink  to='/Digital-Marketing' className="nav-link"><img className="nav_gif" src="assets/images/menulogo/service/digital-marketing-services.gif"/>Degital Marketing </NavLink>
                                        </li>   
                                        <li className="nav-item">
                                            <NavLink to="/bpo-services" className="nav-link"><img className="nav_gif" src="assets/images/menulogo/service/bpo.gif"/>BPO Services</NavLink>
                                        </li>                    
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle"> Technologies 
                                    </a>

                                    <ul className="dropdown-menu  border_animation pb-3">
                                   
                                    <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center ">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/mobile.gif" /> APP TECHNOLOGIES
                                            </a>
        
                                            <ul className=" ">
                                            <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/iphone.png" ></img> ios</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link  zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/swift.png" ></img>Swift</a>
                                                </li> */}
        
                                            <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/flutter.png" ></img>Flutter</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/xcode.png" ></img>X-code</a>
                                                </li> */}
        

                                                
                                                <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/android.png" ></img>Android</a>
                                                </li>
                                                
                                                {/* <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/reactnative.png" ></img>React Native</a>
                                                </li> */}
                                                
                                                
                                              
                                                
                                              


                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center ">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/cms.gif" /> CMS 
                                            </a>
        
                                            <ul className="">
                                               
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/wix.png" />Wix</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/drupal.png" />Drupal</a>
                                                </li> */}
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/joomla.png" ></img>Joomla</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/shopify.png" />Shopify</a>
                                                </li>
        
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/magento.png" ></img>Magento</a>
                                                </li> */}
                                              
                                               
                                                
                                               
                                                <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/wordpress.png" ></img>Wordpress</a>
                                                </li>
                                                
                                              


                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center ">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/freamework.gif" />
                                                FRAMEWORK 
                                            </a>
        
                                            <ul className="">
                                            
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link"><img className='nk_navimg' src="assets/images/menulogo/technology/viewjs.png" ></img>View Js</a>
                                                </li> */}
                                                
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/angular.png" ></img>Angular</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/laravel.png" />Laravel</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="team-style-one.html" className="nav-link zoom ">
                                                    <img className='nk_navimg' src="assets/images/menulogo/technology/reactjs.png" ></img>React Js</a>
                                                </li>
        
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/ci.png" />Codeigniter </a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/ruby-on-rails.png" />Ruby on Rails</a>
                                                </li> */}
                                                
                                              


                                            </ul>
                                        </li>
                                       

                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/emearging.gif" /> FRONTEND
                                            </a>
        
                                            <ul className="">
                                            
                                                
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/js.png" />JS</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/css.png" />CSS</a>
                                                </li>
                                            
                                            {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/sass.png" />Sass</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/html5.png" />HTML5</a>
                                                </li>
                                                
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/bootstrap.png" />Bootstrap</a>
                                                </li> */}
                                               
{/* 
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/tailwind.png" ></img>Tailwind CSS</a>
                                                </li> */}
        
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/backend.gif" /> BACKEND
                                            </a>
        
                                            <ul className="">
                                            
                                            <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/phpmysql.png" />PHP</a>
                                                </li>
                                                
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/java.png" />Java</a>
                                                </li> */}
                                               
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/dart.png" />Dart</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/cserv.png" />C#.net</a>
                                                </li> */}
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/python.png" />Python</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/nodejs.png" />Node js</a>
                                                </li>
                                                
        
                                            </ul>
                                        </li>
                                        
                                        
                                        <li className="nav-item">
                                            <a href="#" className="nav-link dropdown-toggle text_center ">
                                            <img className='nk_navimgheding' src="assets/images/menulogo/technology/microsoft.gif" /> MICROSOFT SKILLS
                                            </a>
        
                                            <ul className="">
                                            <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/asp.net.png" ></img> ASP.NET</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/sqlserver.png" />Sql Server</a>
                                                </li>
                                               
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/wpf.png" ></img>WPF & WPF</a>
                                                </li> */}
                                                
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/sharepoint.png" />Sharepoint</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/cloude.png" ></img>Cloude Computing</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a href="team-style-two.html" className="nav-link zoom "><img className='nk_navimg' src="assets/images/menulogo/technology/microsoftsliverlight.png" ></img>Microsoft Sliverlight</a>
                                                </li> */}
                                                
                                       
                                            </ul>
                                        </li>
                                      
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link "> Career 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/pricing' className="nav-link"> Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link"> Contact Us</NavLink>
                                </li>
                            </ul>

                            <div className="others-options ms-auto">
                           
                                <div className="option-item">
                                    <a href="contact-us.html" className="default-btn btn style-2">Get Started Now <i className="ri-arrow-right-line"></i></a>
                                </div>
                                <div className="option-item">
                                
                                    {/* <div className="switch-box">
                                        <label id="switch" className="switch">
                                            <input type="checkbox" onchange="toggleTheme()" id="slider"/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        </>
  )
}

export default Menu