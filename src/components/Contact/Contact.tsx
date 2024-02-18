const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-top pt-24 flex-col items-center">
      <div className="text-6xl font-bold text-white font-game1 mb-3">
        Contact Us
      </div>
      <div className="flex justify-start items-center h-[75%] w-full mb-3">
        <div className="flex  justify-center items-center w-[60%] h-full px-6">
          <div className="flex flex-col justify-center items-center bg-black w-full h-[50%] border-2 border-white rounded-3xl px-4 py-4 text-white">
            Embed Google Maps here
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full pr-6">
          <div className="flex flex-col justify-center items-center bg-[#282855] w-full h-[90%] border-2 border-white rounded-3xl px-4 py-4">
            <div className="text-4xl font-bold text-white font-game1 mb-3">
              Feel free to ask us for any queries
            </div>
            <div className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Name
            </div>
            <input
              type="text"
              className="w-[80%] px-4 h-10 rounded-3xl border-[3px] border-blue-400 focus:border-blue-500 text-lg font-game1"
            />
            <div className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Email
            </div>
            <input
              type="text"
              className="w-[80%] px-4 h-10 rounded-3xl border-[3px] border-blue-400 focus:border-blue-500 text-lg font-game1"
            />
            <div className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Subject
            </div>
            <input
              type="text"
              className="w-[80%] px-4 h-10 rounded-3xl border-[3px] border-blue-400 focus:border-blue-500 text-lg font-game1"
            />
            <div className="text-3xl font-bold text-white font-game1 mb-2 mt-2">
              Message
            </div>
            <textarea className="w-[80%] py-2 px-4 h-24 rounded-3xl border-[3px] border-blue-400 focus:border-blue-500 text-lg font-game1" />
            <button
              className="w-[30%] h-28 rounded-3xl border-2 border-black bg-white text-black font-bold mt-6 font-game2 hover:scale-105 transition-all duration-300"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black w-full h-full"></div>
    </div>
  );
};

export default Contact;
