import React from 'react'

const Footer = () => {
  return (
    <>
            {/* <!--Start Footer Area--> */}
            <div className="start-footer-area pt-100 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget footer-logo-area">
                            <a href="index.html"><img src="assets/images/white-logo.png" alt="Logo"/></a>
                            <p>It is a long established fact that wo will
                            be distracted by the readable content as
                            when looking at its layout.</p>
                            <div className="social-content">
                                <ul>
                                    <li>
                                        <span>Follow Us</span>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i className="ri-facebook-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/?lang=en" target="_blank"><i className="ri-instagram-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/?lang=en" target="_blank"><i className="ri-linkedin-line"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget footer-address-area">
                            <h3>Address Information</h3>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-phone-call-1"></i>
                                    </div>
                                    <p>Call Us Now</p>
                                    <a href="tel:+0408886666">+040 888 6666</a>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <p>Email Address</p>
                                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#4c24292020230c053e253f29622f2321"><span className="__cf_email__" data-cfemail="325a575e5e5d727b405b41571c515d5f">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-place"></i>
                                    </div>
                                    <p>Address</p>
                                    <span>204 Protector Here, USA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget footer-useful-links-area pl-20">
                           
                            <iframe className="nk_iframe" id="twitter-widget-0"  scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true}   title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/TTechnosoft?dnt=false&;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19zZW5zaXRpdmVfbWVkaWFfaW50ZXJzdGl0aWFsXzEzOTYzIjp7ImJ1Y2tldCI6ImludGVyc3RpdGlhbCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2JsdWVfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfZ292X3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX2FmZmlsaWF0ZV9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fwww.technexttechnosoft.com%2F&;sessionId=e60c800c86ddab32843355292e5491091d7d27de&amp;showHeader=true&amp;showReplies=false&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"></iframe>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget footer-subscribe-area">
                            
                          <iframe className="nk_iframe" name="fcf97f9f7674c4"  data-testid="fbage Facebook Social Plugin" title="fbage Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&;app_id=1495218217536611&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df28c4755d56b9d%26domain%3Dwww.technexttechnosoft.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.technexttechnosoft.com%252Ff39a5af0648964%26relation%3Dparent.parent&;container_width=0&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FtechnexTTechnosoft&;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" ></iframe>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End Footer Area--> */}
        
        {/* <!--Start Copy Right Area--> */}
        <div className="copy-right-area">
            <div className="container">
                <p>© <span> Copyright {new Date().getFullYear()}</span> Developed by<a href="https://https://www.technexttechnosoft.com/" target="_blank"> TechnextTechnosoft.</a>  All Rights Reserved.</p>
                
            </div>
        </div>
        {/* <!--End Copy Right Area--> */}

        {/* <!-- Start Go Top Area --> */}
        <div className="go-top">
            <i className="ri-rocket-line"></i>
            <i className="ri-rocket-line"></i>
        </div>
        {/* <!-- End Go Top Area --> */}

    </>
  )
}

export default Footer