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
    "relative text-xl  lg:text-[22px] md:text-[22px] w-fit cursor-pointer  font-game1";

  const ActiveLink = "text-white";

  return (
    <div
      className={`transition-all duration-800 rounded-3xl flex w-full  px-6 text-white lg:rounded-full uppercase ${
        isDropdownOpen
          ? "sm:rounded-t-3xl md:rounded-t-3xl rounded-b-none"
          : "sm:rounded-3xl md:rounded-3xl"
      }`}
      style={{ backgroundColor: "rgb(0,0,0,0.9)", backdropFilter: "blur(4px)" }}
    >
      <div className='w-full flex flex-row align-middle justify-start items-center'>
        <img src={gdsclogo} alt='GDSC Logo' className='w-14 h-8' />
        <div className='ml-4 hover:cursor-pointer font-game1 text-xl text-white'>
          GDSC GHRIETN
        </div>
      </div>
      <div
        className={`transition-all dropdown-menu absolute left-0 z-40 w-full flex flex-col gap-7 items-center py-2 rounded-b-3xl
            lg:static lg:flex-row lg:justify-end lg:bg-transparent lg:opacity-100 ${
              isDropdownOpen
                ? "top-[2.9rem] shadow-gray-950 w-full bg-black opacity-95 "
                : "opacity-0 top-16"
            }`}
      >
        <ul className='flex flex-col items-center gap-6 lg:flex-row'>
          <li
            className={`${NavLink}  ${
              currentSection === "sectionHome" ? ActiveLink : "text-slate-600"
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
              currentSection === "sectionAbout" ? ActiveLink : "text-slate-600"
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
              currentSection === "sectionEvents" ? ActiveLink : "text-slate-600"
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
              currentSection === "sectionTeam" ? ActiveLink : "text-slate-600"
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
                : "text-slate-600"
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
        className='toggle-button flex items-center  lg:hidden transition-opacity duration-800'
        onClick={toggleDropdown}
      >
        <Hamburger
          size={24}
          toggled={isDropdownOpen}
          toggle={setIsDropdownOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
