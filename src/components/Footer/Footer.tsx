import "./Footer.styles.css";

const Footer:React.FC=()=>{
    return(
        <div id="footer-section">
                <div className="information">
                        <div>Google Developer Student Clubs<br/>GHRIET NAGPUR<br/>
                        Shradha Park, B-37/39, Hingna Rd, Midc, Nagpur, Maharashtra 440028</div>
                </div>
                    <div className="social-media">
                        <h2>Follow Us On</h2>
                        <div className="social-media-icons">
                        <span className="social-media-icon">
                            <a href="https://www.instagram.com/dscghriet/">
                                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
                            </a>
                        </span>
                        <span className="social-media-icon">
                            <a href="https://www.linkedin.com/company/dsc-ghriet/">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                            </a>
                        </span>
                        <span className="social-media-icon">
                            <a href="https://www.facebook.com/dscghriet">
                                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
                            </a>
                        </span>
                        <span className="social-media-icon">
                            <a href="https://twitter.com/dscghriet">
                                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter" />
                            </a>
                        </span>
                        </div>
                    </div>
        </div>
    );
}

export default Footer;
