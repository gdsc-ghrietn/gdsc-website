import vector from "../../assets/vector.png";

const Events = () => {
  return (
    <div className="w-full h-screen flex justify-center items-top pt-24 border-4 border-white">
      <div className="flex flex-col">
        <div className="text-center text-6xl font-bold text-white font-game1">
          Events
        </div>

        <div className="mt-5 bg-[#200b41] w-[22rem] xl:w-[80rem] lg:w-[60rem] md:w-[40rem] sm:w-[35rem] h-[35rem] lg:h-[30rem] rounded-[3rem] shadow-md flex lg:flex-row xl:flex-row items-center justify-around px-10 flex-col-reverse lg:justify-between">
          <div className="text-white font-game1 text-6xl sm:text-7xl md:text-7xl lg:text-6xl xl:text-7xl flex flex-col justify-start items-start px-5 mb-10 ">
            <h1>
              <span className="text-blue-600">T</span>ogether
            </h1>
            <h1>
              <span className="text-red-600">E</span>veryone
            </h1>
            <h1>
              <span className="text-yellow-600">A</span>chieves
            </h1>
            <h1>
              <span className="text-green-600">M</span>ore
            </h1>
          </div>
          <div className="flex flex-row text-white lg:items-end">
            <div
              className="text-white text-5xl lg:mb-[8rem] xl:mb-[8rem] font-retro align-center text-center mt-10"
              // style={{ textShadow: "2px 4px 1px rgba(255, 255, 255, 1)" }}
            >
              OUR TEAM
            </div>

            <img
              className="mb-[3rem] h-[31rem] hidden lg:block xl:block md:hidden sm:hidden"
              src={vector}
              alt="vector image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
