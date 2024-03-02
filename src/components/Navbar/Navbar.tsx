import { useState } from "react";
import gdsclogo from "../../assets/gdsc_logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = ({
  HomeRef,
  AboutRef,
  EventsRef,
  TeamRef,
  ContactRef,
  currentSection,
}: {
  HomeRef: any;
  AboutRef: any;
  EventsRef: any;
  TeamRef: any;
  ContactRef: any;
  currentSection: any;
}) => {
  const [currSection, setCurrSection] = useState("sectionHome");

  const sectionScroller = (SectionRef: any) => {
    SectionRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(currSection);
    setCurrSection(SectionRef.current.id);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavLink =
    "relative text-xl  lg:text-3xl md:text-xl w-fit cursor-pointer transition-all duration-500 font-game1";

  const ActiveLink = "text-white";

  return (
    <div
      className=' lg:w-[97%] lg:rounded-full lg:mt-1 mt-0 rounded-none w-screen h-12 flex flex-row align-middle lg:justify-between lg:px-10 sm:bg-black md:bg 
      font-game2  text-white items-centersm:px-3 sm:px-4 md:px-4 px-4  select-none lg:bg-[rgb(0,0,0,0.8)] drop-shadow-xl bg-black'
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className=' w-full flex flex-row align-middle justify-start items-center'>
        <img
          src={gdsclogo}
          alt='GDSC Logo'
          className='lg:w-16 lg:h-10 w-14 h-8'
        />
        <div className='ml-4 hover:cursor-pointer  font-game1 text-xl  lg:text-3xl md:text-xl'>
          GDSC GHRIETN
        </div>
      </div>
      <div
        className={`dropdown-menu absolute left-0  z-50 w-full flex flex-col gap-7 items-center py-2
            lg:static lg:flex-row lg:justify-end lg:bg-transparent lg:opacity-100  transition-all duration-500  ${
              isDropdownOpen
                ? " top-[2.9rem] backdrop-contrast-200    shadow-gray-950  bg-black opacity-100"
                : "opacity-0 top-16"
            } 
            `}
      >
        <ul className='flex flex-col items-center gap-6 lg:flex-row'>
          <li
            className={`${NavLink} ${
              currentSection === "sectionHome" ? ActiveLink : "text-slate-700"
            }`}
            onClick={() => {
              sectionScroller(HomeRef);
              toggleDropdown();
            }}
          >
            Home
          </li>
          <li
            className={`${NavLink} ${
              currentSection === "sectionAbout" ? ActiveLink : "text-slate-700"
            }`}
            onClick={() => {
              sectionScroller(AboutRef);
              toggleDropdown();
            }}
          >
            About
          </li>
          <li
            className={`${NavLink} ${
              currentSection === "sectionEvents" ? ActiveLink : "text-slate-700"
            }`}
            onClick={() => {
              sectionScroller(EventsRef);
              toggleDropdown();
            }}
          >
            Events
          </li>
          <li
            className={`${NavLink} ${
              currentSection === "sectionTeam" ? ActiveLink : "text-slate-700"
            }`}
            onClick={() => {
              sectionScroller(TeamRef);
              toggleDropdown();
            }}
          >
            Team
          </li>
          <li
            className={`${NavLink} ${
              currentSection === "sectionContact"
                ? ActiveLink
                : "text-slate-700"
            }`}
            onClick={() => {
              sectionScroller(ContactRef);
              toggleDropdown();
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      <div
        className='toggle-button flex items-center  lg:hidden transition-opacity duration-500'
        onClick={toggleDropdown}
      >
        <Hamburger toggled={isDropdownOpen} toggle={setIsDropdownOpen} />
      </div>
    </div>
  );
};

export default Navbar;
