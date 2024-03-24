import React from "react";
import { TeamMember } from "../components/Team/Team";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import teamMembersData from "../components/Team/Team.json";
import { FacultyMemberProps } from "../components/Team/FacultyMemberCard";
import FacultyMemberCard from "../components/Team/FacultyMemberCard";
import FacultyMembersData from "../components/Team/Faculty.json";
import TeamBanner from "../components/Team/TeamBanner";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const TeamPage = () => {
  const teamMembers: TeamMember[] = teamMembersData;
  const facultyMembers: FacultyMemberProps[] = FacultyMembersData;
  const navigate = useNavigate();
  const [_, setimportedImage] = React.useState<Map<number, string>>(
    new Map()
  );

  async function handleImageImport(teamMember: TeamMember) {
    if (!teamMember.image_url) {
      try {
        let fname = teamMember.name.split(" ")[0].toLowerCase();
        const image = await import(`../../assets/team-images/${fname}.jpg`);
        setimportedImage(
          (prev) => new Map(prev.set(teamMember.id, image.default))
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center gap-5 overflow-x-hidden ">
        <div className="w-full flex flex-row pl-5 mt-5 items-start ">
           <button type="button" onClick={() => navigate("/")} 
              className="flex justify-center items-center px-5 py-3 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <FontAwesomeIcon icon={faArrowLeftLong} style={{color:"white"}} />
              <span>Go back</span>
          </button>    
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">

          <TeamBanner />
        </div>
      <div className="flex flex-col p-0 sm:mr-10 justify-center items-center">
        <div className="w-full flex flex-row  items-start">
          <h1 className="text-white text-2xl font-game2 shadow-red-500 pl-5">Faculty Advisors ....</h1>
        </div>
        <div className="h-full font-game2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
          {facultyMembers.map((member: FacultyMemberProps) => {
              return (
                <div className="w-[17rem]" key={member.id}>
                  <FacultyMemberCard
                    image_url={member.image_url}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                  />
                </div>
              );
            })}   
        </div>
      </div>
      <div className="flex flex-col p-0 sm:mr-10  justify-center items-center">
        <div className="w-full flex flex-row items-start ">
          <h1 className="text-white text-2xl font-game2 shadow-red-500 pl-5">Our Team ....</h1>
        </div>
        <div className="h-full font-game2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
            {teamMembers.map((member: TeamMember) => {
            handleImageImport(member);
            return (
              <div className="w-[17rem]" key={member.id}>
                <TeamMemberCard
                  image_url={member.image_url}
                  fullName={member.name}
                  position={member.role}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TeamPage
