import gdsclogo from "../../assets/gdsc_logo.png";

const Home = () => {
  const isMobileWidth = window.innerWidth < 640
  return (
    <div className="w-full h-screen bg-home bg-cover bg-center bg-no-repeat relative">
      <div className="w-full h-full bg-black bg-opacity-5 flex justify-between items-center flex-col  ">
        <div className="w-full h-full bg-black bg-opacity-10 flex justify-center items-center flex-col  mt-12 lg:mt-4 md:mt-4 sm:mt-0">
          <img
            src={gdsclogo}
            alt="GDSC Logo"
            className="mx-auto mt-2 w-[7rem] h-auto sm:w-[8rem] md:w-35 lg:w-40 xl:w-40"
          />
          <div
            className="text-center font-sans font-[1000] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-[#3885BD] px-4 mt-2"
            style={{
              WebkitTextStroke: isMobileWidth ? "1.5px white" : "2px white"
            }}
          >
            Google Developer Students Club
          </div>
          <div
            className="text-center font-sans font-extraextrabold text text-[1.3rem] sm:text-2xl md:text-[1.7rem] lg:text-[1.7rem] xl:text-[1.7rem] text-white mb-[50px] tracking-tight mt-[2rem]"
            style={{ WebkitTextStroke: isMobileWidth ? "1.1px #360447" : "1.3px #360447" }}
          >

            {isMobileWidth ? (
              "G.H. Raisoni Institute of Engineering and Technology, Nagpur"
            ) : (
              <>
                G.H. Raisoni Institute of Engineering and Technology <br /> Nagpur
              </>
            )}

          </div>
        </div>
        <div className=" h-[30%] w-full flex flex-col justify-end items-center pb-16">
          <div className="text-white font-game1 text-[20px] sm:text-[23px] mb-4 text-center px-2">
            A DEVELOPERS' COMMUNITY BY THE STUDENTS, FOR THE STUDENTS.
          </div>
          <button className="bg-white text-black px-4 mt-1 border-[3px] border-black rounded-full font-extrabold py-3 font-game2 hover:cursor-pointer hover:transform hover:scale-105 transition-all duration-200 text-[.7rem] sm:text-[.8rem] hover:bg-black hover:text-white">
            PRESS TO JOIN
          </button>
        </div>
      </div>
    </div >
  );
};

export default Home;
