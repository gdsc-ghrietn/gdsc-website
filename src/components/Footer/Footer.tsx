import logo from "../../assets/gdsc_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row justify-around bg-black h-full w-full  font-game1 tracking-wide sm:mx-auto sm:gap-0 ">
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center mx-auto gap-4 m-2 sm:m-2 ">
        <img src={logo} alt="" className="h-8" />
        <h1 className=" text-white text-center lg:text-left xl:text-left">
          GOOGLE DEVELOPER STUDENTS CLUB <br /> GHRIET NAGPUR
        </h1>
      </div>
      <div className="flex flex-col m-2 mx-auto justify-center text-center sm:m-2">
        <h1 className="text-white text-center leading-tight">
          SHRADHA PARK, B-37/39, HINGNA RD, MIDC, <br /> NAGPUR, MAHARASHTRA
          440028
        </h1>
      </div>
      <div className="flex flex-col m-2 mx-auto text-white justify-center text-center sm:m-2 leading-normal">
        <h1>FOLLOW US ON</h1>
        <div className="flex  gap-7 mx-auto ">
          <a
            href="https://www.instagram.com/gdsc_ghrietn"
            target="_blank"
            className=""
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/gdsc-ghrietn/"
            target="_blank"
            className=""
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/gdsc_ghrietn"
            target="_blank"
            className=""
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://discord.gg/JVFr59kPkg" target="_blank" className="">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://www.facebook.com/people/Gdsc-Ghrietn/pfbid017qz8rYcNsf33adManeJPgBY4uF7TApJw4Uw7UQGgLUgp5nDrRC2ZHmSJjaCcRhol/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
