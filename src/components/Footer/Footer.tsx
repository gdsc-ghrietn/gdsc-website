import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.styles.css";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import GdscLogo from "../../assets/google-developers-seeklogo.com.svg";

const Footer: React.FC = () => {
  return (
    <div id="footer-section">
      <div className="Google-Map">
        <h2>Our College</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.466243279665!2d79.00171792141964!3d21.12491990991707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eab12bd10cef%3A0xf6e67c2f0a066c27!2sG.%20H.%20Raisoni%20Institute%20of%20Engineering%20and%20Technology%20(Autonomous)!5e0!3m2!1sen!2sin!4v1705843369091!5m2!1sen!2sin"
          width="240"
          height="180"
          loading="lazy"
        ></iframe>
      </div>
      <div className="information">
        <div className="GdscLabel">
          <img src={GdscLogo} alt="GDSC_LOGO" />
          Google Developer Student Clubs
          <br />
          GHRIET NAGPUR
          <br />
        </div>
        <p className="address">
          Shradha Park, B-37/39, Hingna Rd, Midc, Nagpur, Maharashtra 440028
        </p>
      </div>
      <div className="social-media">
        <h2>Follow Us On</h2>
        <div className="social-media-icons">
          <span className="social-media-icon">
            <a
              href="https://www.instagram.com/gdsc_ghrietn"
              target="_blank"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
          <span className="social-media-icon">
            <a
              href="https://www.linkedin.com/company/gdsc-ghrietn/"
              target="_blank"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>

          <span className="social-media-icon">
            <a href="https://twitter.com/dscghriet" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="x-twitter" />
            </a>
          </span>
          <span className="social-media-icon">
            <a
              href="https://discord.gg/JVFr59kPkg"
              target="_blank"
              className="discord"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </span>
          <span className="social-media-icon">
            <a
              className="facebook"
              href="https://www.facebook.com/people/Gdsc-Ghrietn/pfbid017qz8rYcNsf33adManeJPgBY4uF7TApJw4Uw7UQGgLUgp5nDrRC2ZHmSJjaCcRhol/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
