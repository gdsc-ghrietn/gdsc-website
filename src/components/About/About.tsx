import { BackgroundBeams } from '../ui/background-beams';

const About = () => {
    return (
        <div className="relative w-full min-h-screen md:h-screen flex flex-col justify-evenly content-between uppercase ">
            <div className="text-xl lg:text-2xl font-normal text-white font-game2 flex items-center justify-center">
                About Us
            </div> 
            <div className="flex flex-col lg:max-w-[75%] xl:max-w-[61%] px-7 md:px-10 lg:pl-20 space-y-6"> 
                <div className="text-xl lg:text-2xl font-normal text-white font-game2">What's GDSC?</div>
                <div className="text-xl lg:text-[1.5rem] font-normal text-white font-game1 leading-none">
                    Google collaborates with university students who are passionate about growing developer communities. GDSC is an Organisation for university students who want to bring about a change through technology. We are focused upon building technical and non-technical skills, which would help students to build a better community.
                </div>
            </div>
            <div className="flex flex-col lg:max-w-[75%] xl:max-w-[61%] px-7 md:px-10 lg:pl-20 space-y-6">
                <div className="text-xl lg:text-2xl font-normal text-white font-game2">What GDSC GHRIETN does?</div>
                <ul className="leading-none text-xl lg:text-[1.5rem] font-normal text-white font-game1 list-disc list-inside pl-4">
                    <li>Projects</li>
                    <li>Seminars</li>
                    <li>Hackathons</li>
                    <li>Study Jams</li>
                </ul>
            </div>
            <BackgroundBeams/>            
        </div>

    )
}

export default About
