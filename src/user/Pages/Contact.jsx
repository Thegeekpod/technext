import React from 'react'

const Contact = () => {
  return (
  <>

  
          {/* <!--Start Page Header Area--> */}
        <div className="page-header-area bg-f4fbf6">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="page-header-content">
                            <h1>Conatct Us</h1>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Conatct</li>
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

        {/* <!--Start Contact Area--> */}
        <div className="contact-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-contact-card">
                            <div className="icon">
                                <i className="flaticon-placeholder"></i>
                            </div>
                            <h3>Address:</h3>
                            <span>72 Division St, 7700. E Denver,
                               CO 08732, USA</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-contact-card">
                            <div className="icon">
                                <i className="flaticon-mail"></i>
                            </div>
                            <h3>Email Address:</h3>
                            <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#c8a1baa1bbad88afa5a9a1a4e6aba7a5"><span className="__cf_email__" data-cfemail="1a736873697f5a7d777b737634797577">[email&#160;protected]</span></a>
                            <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#355c475c4650464045455a4741755258545c591b565a58"><span className="__cf_email__" data-cfemail="9ef7ecf7edfbedebeeeef1eceadef9f3fff7f2b0fdf1f3">[email&#160;protected]</span></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-contact-card">
                            <div className="icon">
                                <i className="flaticon-phone-call-1"></i>
                            </div>
                            <h3>Phone Number:</h3>
                            <a href="tel:+56987298257809">+56 9872 9825 7809</a>
                            <a href="tel:+94298725989234">+94 2987 2598 9234</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-contact-card">
                            <div className="icon">
                                <i className="flaticon-desktop"></i>
                            </div>
                            <h3>Fax:</h3>
                            <a href="tel:+85863546987">+8-586-3546987</a>
                            <a href="tel:+35732874259">+3-573-2874259</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Contact Area--> */}

        {/* <!--Start Contact Form Area--> */}
        <div className="contact-form-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span>Get In Touch</span>
                    <h2>Need Help Building Your Website?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus, dignissim phareta lorem. Sed ut lacus aliquet, volutpat sem pellentesque, egestas nisl.</p>
                </div>
                <div className="contacts-form">
                    <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Name *" id="name" className="form-control" required data-error="Please enter your name"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
            
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Email*" className="form-control" required data-error="Please enter your email"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
            
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group">
                                    <input type="text" name="phone_number" id="phone_number" placeholder="Number*" required data-error="Please enter your number" className="form-control"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
            
                            <div className="col-lg-12 col-sm-6">
                                <div className="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject*" required data-error="Please enter your subject"/>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
            
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" placeholder="Message*" id="message" cols="30" rows="6" required data-error="Write your message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input
                                        name="gridCheck"
                                        value="I agree to the terms and privacy policy."
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                        required
                                    />
                                    <label className="form-check-label" for="gridCheck">
                                        I agree to the <a href="terms-conditions.html">terms</a> and <a href="privacy-policy.html">privacy policy</a>
                                    </label>
                                    <div className="help-block with-errors gridCheck-error"></div>
                                </div>
                            </div>
            
                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="default-btn active">
                                    <span>Send Message</span>
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!--End Contact Form Area--> */}

        
        
  
  </>
  )
}

export default Contact