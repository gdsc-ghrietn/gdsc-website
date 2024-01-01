import "./Navbar.styles.css";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuIcon = document.getElementsByClassName('menu-icon')[0] as HTMLElement;
    const toggleMenu = () => {
        menuIcon.classList.toggle('change');
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <a href="/">
                <div className="logo">
                    <div className="logo-img">
                                <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg" alt="logo" />                            
                    </div>
                    <div className="college-name">GHRIET NAGPUR</div>
                </div>
            </a> 
            <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>
            <ul className={showMenu ? 'show' : ''}>
                <li><a href="/">Home</a></li>
                <li><a href="#event-section">Events</a></li>
                <li><a href="#team-section">Team</a></li>
                <li><a href="#contact-us-section">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;