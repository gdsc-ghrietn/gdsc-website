import { useState } from "react";
import gdsclogo from "../../assets/gdsc_logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const NavLink =
    "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

  return (
    // <div className="w-full flex justify-center items-center fixed top-0 z-10">
    //     <div className="w-[97%] h-[45px] bg-black mt-4 rounded-[40px] flex justify-between items-center px-6 bg-opacity-80 text-white text-opacity-90 font-game1 text-[22px] py-4 backdrop-blur-sm">
    //         <div className="flex">
    //             <img src={gdsclogo} alt="GDSC Logo" width={50} height={10} />
    //             <div className="ml-4 hover:cursor-pointer">GDSC GHRIETN</div>
    //         </div>
    //         <div className="flex">
    //             <div className="hover:cursor-pointer">HOME</div>
    //             <div className="ml-6 hover:cursor-pointer">ABOUT</div>
    //             <div className="ml-6 hover:cursor-pointer">EVENTS</div>
    //             <div className="ml-6 hover:cursor-pointer">TEAM</div>
    //             <div className="ml-6 hover:cursor-pointer">CONTACT</div>
    //         </div>
    //     </div>
    // </div>

    <nav
      style={{ backdropFilter: "blur(50px)" }}
      className='lg:w-[97%] lg:rounded-full lg:mt-2 mt-0 rounded-none w-screen h-16 flex flex-row lg:justify-between lg:px-10
      font-game2 bg-black opacity-85 text-white items-centersm:px-3'
    >
      <div className='-z-0 w-full flex flex-row align-middle justify-start items-center'>
        <img src={gdsclogo} alt='GDSC Logo' className='w-20 h-14' />
        <div className='ml-4 hover:cursor-pointer text-xs lg:text-2xl'>
          GDSC GHRIETN
        </div>
      </div>
      <div
        className={`dropdown-menu absolute ${
          isDropdownOpen ? " top-16 opacity-100 " : "opacity-0 top-16"
        } left-0 bg-black z-10 w-full flex flex-col gap-7 items-center py-2
            lg:static lg:flex-row lg:justify-end lg:bg-transparent lg:opacity-100 transition-all duration-500
            `}
      >
        <ul className='flex flex-col items-center gap-6 lg:flex-row backdrop-blur-xl '>
          <a href='#Home' className=''>
            <li className='lg:text-lg text-sm'>Home</li>
          </a>
          <a
            href='#About'
            className={`${NavLink} `}
          >
            <li className='lg:text-lg text-sm'>About</li>
          </a>
          <a
            href='#Events'
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li className='lg:text-lg text-sm '>Events</li>
          </a>
          <a
            href='#Team'
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li className='lg:text-lg text-sm'>Team</li>
          </a>
          <a
            href='#Contact'
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <li className='lg:text-lg text-sm'>Contact</li>
          </a>
        </ul>
      </div>

      <div
        className='toggle-button flex items-center  lg:hidden transition-opacity duration-500'
        onClick={toggleDropdown}
      >
        <Hamburger toggled={isDropdownOpen} toggle={setIsDropdownOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
