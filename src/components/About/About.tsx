import "./About.styles.css";
import GdscLogo from "../../assets/google-developers-seeklogo.com.svg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const About: React.FC = () => {
  return (
    <div id="about-section" className="about-section">
      {/* Left-Section */}

      <div className="left-section">
        <div className="cross">
          <div className="rectangle-left"></div>
          <div className="reactangle-right"></div>
        </div>
        <div className="reactangle-strip">
          <div className="rectangle-strip-top"></div>
          <div className="rectangle-strip-bottom"></div>
        </div>
        <div className="circles"></div>
        <div className="four-eclipe">
          <div className="half-circle-container">
            <div className="half-circle red"></div>
            <div className="half-circle green"></div>
          </div>

          <div className="half-circle-container">
            <div className="half-circle blue"></div>
            <div className="half-circle yellow"></div>
          </div>
        </div>
        {/* four circles */}
        <div className="four-circles">
          <div className="first-circle"></div>
          <div className="second-circle"></div>
          <div className="third-circle"></div>
          <div className="fourth-circle"></div>
        </div>

        {/* bottom-half */}
        <div className="bottom-circles">
          <div className="half-down"></div>
        </div>

        <div className="two-bottom-strip">
          <div className="right-strip"></div>
          <div className="left-strip"></div>
        </div>

        <div className="dotes">
          <div className="first-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
          <div className="second-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
          <div className="third-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
          <div className="four-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
          <div className="fifth-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
          <div className="sixth-line">
            <span className="first-dot"></span>
            <span className="second-dot"></span>
            <span className="third-dot"></span>
          </div>
        </div>

        <div className="middle-cross">
          <div className="left-line"></div>
          <div className="right-line"></div>
        </div>
        <div className="main-design">
          <div className="first-design"></div>
          <div className="second-design"></div>
          <div className="third-design"></div>
          <div className="fourth-design"></div>
          <div className="black-half"></div>
          <div className="cross-design">
            <div className="cross-ver"></div>
            <div className="cross-hor"></div>
          </div>
        </div>
      </div>
      {/* //Right-Section */}
      <div className="right-section">
        <div className="gdsc-content">
          <div
            className="gdsc-label"
            data-aos="fade-down"
            // data-aos-duration="1000"
          >
            <img src={GdscLogo} alt="GDSC-LOGO" />
            <h4>Google Devloper Student Clubs</h4>
            <p>GHRIETN</p>
          </div>
          <div
            className="dev-slogan"
            data-aos="fade-down"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
          >
            <h2>
              A developers' community by <br /> students, for students.
            </h2>
          </div>
          <div
            className="join-gdsc"
            data-aos="fade-down"
            // data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
          >
            Join GDSC GHRIETN for a journey of <br /> <span>Discovering</span>{" "}
            new horizons in tech.
            <br />
            <button>Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
