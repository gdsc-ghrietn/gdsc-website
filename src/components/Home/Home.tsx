import gdsclogo from "../../assets/gdsc_logo.png";

const Home = () => {
  return (
    <div className="w-full h-screen bg-home bg-cover bg-center bg-no-repeat relative">
      <div className="w-full h-full bg-black bg-opacity-5 flex justify-between items-center flex-col backdrop-blur-[1px]">
        <div className="w-full h-full bg-black bg-opacity-10 flex justify-center items-center flex-col">
          <img src={gdsclogo} alt="GDSC Logo" width={180} height={180} className="mt-[10px]"/>
          <div
            className="text-center font-[inter] font-extraextrabold text-[60px] text-[#3885BD] italic mb-2"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Google Developer Students Club
          </div>
          <div
            className="text-center font-[inter] font-extraextrabold text-[27px] text-white italic mb-[50px] tracking-tight"
            style={{ WebkitTextStroke: "1.6px #360447" }}
          >
            G.H. Raisoni Institute of Engineering and Technology <br /> Nagpur
          </div>
        </div>
        <div className=" h-[30%] w-full flex flex-col justify-end items-center pb-16">
          <div className="text-white font-game1 text-[23px] mb-4">
            A DEVELOPERS' COMMUNITY BY THE STUDENTS, FOR THE STUDENTS.
          </div>
          <button className="bg-white text-black text-md px-5 mt-1 border-[3px] border-black rounded-3xl font-extrabold py-4 font-game2">
            PRESS TO JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
