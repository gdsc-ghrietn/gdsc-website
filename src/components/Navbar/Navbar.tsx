import gdsclogo from "../../assets/gdsc_logo.png";

const Navbar = () => {
    return (
        <div className="w-full flex justify-center items-center fixed top-0 z-10">
            <div className="w-[97%] h-[45px] bg-black mt-4 rounded-[40px] flex justify-between items-center px-6 bg-opacity-80 text-white text-opacity-90 font-game1 text-[22px] py-4 backdrop-blur-sm">
                <div className="flex">
                    <img src={gdsclogo} alt="GDSC Logo" width={50} height={10} />
                    <div className="ml-4 hover:cursor-pointer">GDSC GHRIETN</div>
                </div>
                <div className="flex">
                    <div className="hover:cursor-pointer">HOME</div>
                    <div className="ml-6 hover:cursor-pointer">ABOUT</div>
                    <div className="ml-6 hover:cursor-pointer">EVENTS</div>
                    <div className="ml-6 hover:cursor-pointer">TEAM</div>
                    <div className="ml-6 hover:cursor-pointer">CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
