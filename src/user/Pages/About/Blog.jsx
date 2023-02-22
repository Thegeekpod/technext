import React, { Component, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Substring } from './Functions/Function';

const Blog = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:50001/blog/')
      .then(response => setData(response.data));
  }, []);




// const [data, setData] = useState([]);


//     const getUSers= async()=>{
//         const response = await fetch.post("http://localhost:50001/blog/list");
        
//           //const data = await response.json();
//           setData(await response.json());
//         // console.log(data);
//     }
//     useEffect(()=>{
//         getUSers();
//     },[]);
    // fetch("http://127.0.0.1:5022/blog/list").then((resp)=>{
    //     resp.json().then((result)=>{
    //         console.warn('result',result);
    //     })
    // })
  
  return (
    
    <>
 
    
            {/* <!--Start Page Header Area--> */}
        <div className="page-header-area bg-f4fbf6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="page-header-content">
                            <h1>Blog</h1>
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li>Blog</li>
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

        {/* <!--Start Blog Area--> */}
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>News & Blog</span>
                    <h2>Check Out Our Latest Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                </div>
                <div className="row justify-content-center">
                {data.map(item => (
        
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-card style2">
                            <div className="blog-img">
                                <a href="blog-details.html"><img style={{height:'250px' ,width:'100%'}} src={item.image} alt="Image"/></a>
                            </div>
                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="ri-user-heart-line"></i>
                                        By <a href="blog-details.html">{item.authorname}</a> 
                                    </li>
                                    <li>
                                        <i className="ri-calendar-check-line"></i>
                                        {item.date}
                                    </li>
                                </ul>
                                <h3><a href="blog-details.html"><Substring string={item.title}/></a></h3>
                                
                            </div>
                        </div>
                    </div>
                ))}

                  

               
                    
{/*                     
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-card style2">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-img-6.jpg" alt="Image"/></a>
                            </div>
                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="ri-user-heart-line"></i>
                                        By <a href="blog-details.html">Admin</a>
                                    </li>
                                    <li>
                                        <i className="ri-calendar-check-line"></i>
                                        10-June-22
                                    </li>
                                </ul>
                                <h3><a href="blog-details.html">We Started Business For Hand In Hand With Our Technology</a></h3>
                                <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-card style2">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-img-7.jpg" alt="Image"/></a>
                            </div>
                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="ri-user-heart-line"></i>
                                        By <a href="blog-details.html">Admin</a>
                                    </li>
                                    <li>
                                        <i className="ri-calendar-check-line"></i>
                                        10-June-22
                                    </li>
                                </ul>
                                <h3><a href="blog-details.html">What Makes Quick Space The Ideal Theme For Business?</a></h3>
                                <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-card style2">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-img-8.jpg" alt="Image"/></a>
                            </div>
                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="ri-user-heart-line"></i>
                                        By <a href="blog-details.html">Admin</a>
                                    </li>
                                    <li>
                                        <i className="ri-calendar-check-line"></i>
                                        10-June-22
                                    </li>
                                </ul>
                                <h3><a href="blog-details.html">Don't Tell Theories Cleverly Using On Scroll Animations</a></h3>
                                <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog-card style2">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/images/blog/blog-img-9.jpg" alt="Image"/></a>
                            </div>
                            <div className="blog-content">
                                <ul>
                                    <li>
                                        <i className="ri-user-heart-line"></i>
                                        By <a href="blog-details.html">Admin</a>
                                    </li>
                                    <li>
                                        <i className="ri-calendar-check-line"></i>
                                        10-June-22
                                    </li>
                                </ul>
                                <h3><a href="blog-details.html">We Have Already Completed The User Centric Design Project</a></h3>
                                <a href="blog-details.html" className="default-btn btn for-card">Explore More <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="text-center">
                    <a href="blog-details.html" className="default-btn btn">Explore More <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
        {/* <!--End Blog Area--> */}

        {/* <!--Start Newsletter Area--> */}
        <div className="newsletter-area pb-100">
            <div className="container">
                <div className="newsletter-overly">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="newslatter-img">
                                <div className="image-1">
                                    <img src="assets/images/newsletter/newsletter-img-1.gif" alt="Image"/>
                                </div>
                                <div className="image-2">
                                    <img src="assets/images/newsletter/newsletter-img-2.gif" alt="Image"/>
                                </div>
                                <div className="image-3">
                                    <img src="assets/images/newsletter/newsletter-img-3.gif" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="newslatter-content pl-15">
                                <span>Newsletter</span>
                                <h2>View An Organization's Own News Archive</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignssu lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas.</p>

                                <div className="subscribe-form">
                                    <form className="newsletter-form" data-toggle="validator">
                                        <input type="email" className="form-control" placeholder="Enter your email address" name="EMAIL" required autocomplete="off"/>
                            
                                        <button className="default-btn active" type="submit">
                                            Subscribe Now <i className="ri-arrow-right-line"></i>
                                        </button>
                            
                                        <div id="validator-newsletter" className="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Newsletter Area--> */}
    </>
  )
}

export default Blog