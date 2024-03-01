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
    "relative text-sm w-fit cursor-pointer transition-all duration-500";

  const ActiveLink = "text-white";

  return (
    <div
      className='lg:backdrop-blur-sm lg:w-[97%] lg:rounded-full lg:mt-1 mt-0 rounded-none w-screen h-12 flex flex-row align-middle lg:justify-between lg:px-10 sm:bg-black md:bg bg-black
      font-game2  text-white items-centersm:px-3 sm:px-4 md:px-4 px-4  select-none '
    >
      <div className=' w-full flex flex-row align-middle justify-start items-center'>
        <img src={gdsclogo} alt='GDSC Logo' className='w-16 h-10' />
        <div className='ml-4 hover:cursor-pointer text-xs  lg:text-base md:text-base'>
          GDSC GHRIETN
        </div>
      </div>
      <div
        className={`dropdown-menu absolute  ${
          isDropdownOpen
            ? " top-12   shadow-2xl shadow-gray-950 backdrop-blur-lg bg-black opacity-100"
            : "opacity-0 top-16"
        } left-0  z-10 w-full flex flex-col gap-7 items-center py-2
            lg:static lg:flex-row lg:justify-end lg:bg-transparent lg:opacity-100  transition-all duration-500
            `}
      >
        <ul className='flex flex-col items-center gap-6 lg:flex-row  '>
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
