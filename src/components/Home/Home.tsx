import gdsclogo from "../../assets/gdsc_logo.png";

const Home = () => {
  return (
    <div className="w-full h-screen bg-home bg-cover bg-center bg-no-repeat relative">
      <div className="w-full h-full bg-black bg-opacity-5 flex justify-between items-center flex-col backdrop-blur-[1px]">
        <div className="w-full h-full bg-black bg-opacity-10 flex justify-center items-center flex-col xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0">
          <img
            src={gdsclogo}
            alt="GDSC Logo"
            className="mx-auto mt-2 w-[6rem] h-auto sm:w-[8rem] md:w-35 lg:w-35 xl:w-40"
          />
          <div
            className="text-center font-inter font-extraextrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-blue-600 italic mb-2 "
            style={{ WebkitTextStroke: "0.03em white" }}
          >
            Google Developer Students Club
          </div>
          <div
            className="text-center font-[inter] font-extraextrabold text-[1.3rem] sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-white italic mb-[50px] tracking-tight"
            style={{ WebkitTextStroke: "0.04em #360447" }}
          >
            G.H. Raisoni Institute of Engineering and Technology <br /> Nagpur
          </div>
        </div>
        <div className=" h-[30%] w-full flex flex-col justify-end items-center pb-16">
          <div className="text-white font-game1 text-[23px] mb-4 text-center px-2">
            A DEVELOPERS' COMMUNITY BY THE STUDENTS, FOR THE STUDENTS.
          </div>
          <button className="bg-white text-black px-5 mt-1 border-[3px] border-black rounded-3xl font-extrabold py-3 font-game2 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
            PRESS TO JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
