import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
interface TeamMemberProps {
  image_url: string;
  fullName: string;
  position: string;
  github?: string;
  linkedin?: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ image_url, fullName, position, github, linkedin }) => {
  return (
    <div className="w-25 pb-2 bg-white flex flex-col items-center rounded-sm  shadow-[4px__3px_0px] shadow-red-600 m-6 ">
      <img src={image_url} alt="team member" className="w-[90%] h-[50%] mt-2 rounded-lg" />
      <div className="flex flex-col items-center h-[60%] w-full justify-center">
        <h2 className="text-2xl font-game1 w-full  ml-8 items-center flex word-wrap  text-black">{fullName}</h2>
        <h2 className="text-lg font-game1 ml-8 word-wrap w-full text-gray-500">{position}</h2>
        <div className="flex  text-xl justify-end  w-[80%] h-[10%] space-x-2 items-center">
          <a href={github} target="_blank" rel="noreferrer" className='font-[400]'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
