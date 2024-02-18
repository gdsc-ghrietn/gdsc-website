import gdsclogo from '../../assets/gdsc_logo.png'

const Home = () => {
    return (
        <div className="w-full h-screen bg-home bg-cover bg-center bg-no-repeat relative
            ">
            <div className=" w-full h-full bg-black bg-opacity-5 flex justify-between items-center flex-col
                "> 
                <div className=" w-full h-full bg-black bg-opacity-10 flex justify-center items-center flex-col ">
                    <img src={gdsclogo} alt="GDSC Logo" width={200} height={200} />

                    <div className="text-center
                        font-[inter] font-extraextrabold text-[70px] text-[#3885BD] italic mb-10
                        " style={{WebkitTextStroke: '2px white'}}
                    >
                        Google Developer Students Club
                    </div>
                    <div className="text-center
                        font-[inter] font-extraextrabold text-[30px] text-white italic mb-10
                        " style={{WebkitTextStroke: '1.5px #360447'}}
                    >
                        G.H. Raisoni Institute of Engineering and Technology <br/> Nagpur
                    </div>
                </div>
                <div className=" h-[30%] w-full flex flex-col justify-end items-center pb-20
                    ">
                    <div className="text-white font-[VT323] text-2xl  mb-5
                        ">
                        A developers' community by the students, for the students.
                    </div>
                    <button className="bg-white text-black font-sans text-xl px-5 mt-3 border-[4px] border-black rounded-2xl font-extrabold py-3
                        ">
                        PRESS TO JOIN
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Home
