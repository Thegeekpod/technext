import React from 'react'

const Protfolio = () => {
    const script = document.createElement('script');
    let url ='assets/js/custom.js';
    script.src = url;   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  return (

  <>
  
  {/* <!--Start Page Header Area--> */}
        <div className="page-header-area bg-f4fbf6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="page-header-content">
                            <h1>Portfolio Style One</h1>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Portfolio Style One</li>
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

        {/* <!--Start Portfolio Area--> */}
        <div className="portfolio-area ptb-100">
            <div className="container">
                <div className="shoting-btn">
                    <ul>
                        <li>
                            <button className="filter" data-filter="all">All</button>
                        </li>
                        <li>
                            <button className="filter" data-filter=".design">Design</button>
                        </li>
                        <li>
                            <button className="filter" data-filter=".development">Web Development</button>
                        </li>
                        <li>
                            <button className="filter" data-filter=".marketing">Marketing</button>
                        </li>
                        <li>
                            <button className="filter" data-filter=".app">App Development</button>
                        </li>
                    </ul>
                </div>

                <div className="shorting">
                    <div className="row popup-gallery justify-content-center">
                        <div className="col-lg-4 col-md-4 mix app">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-11.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-11.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix design">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-12.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-12.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix app">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-13.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-13.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 mix development">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-14.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-14.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix development">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-15.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-15.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mix marketing">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-16.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-16.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mix development">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-17.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-17.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix design">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-18.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-18.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix marketing">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-19.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-19.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mix design">
                            <div className="portfolio-card">
                                <img src="assets/images/project/project-img-20.jpg" alt="Image"/>
                                <div className="icon">
                                    <a href="assets/images/project/project-img-20.jpg">
                                        <div className="action-icon">
                                            <img src="assets/images/icon/icon-2.png" alt="Image"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="portfolio-details.html" className="default-btn btn">Load More <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
        {/* <!--End Portfolio Area--> */}

  </>
  )
}

export default Protfolio