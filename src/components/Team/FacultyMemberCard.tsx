import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
export interface FacultyMemberProps {
  id?: number;
  image_url: string;
  name: string;
  role: string;
  linkedin?: string;
}

const FacultyMemberCard: React.FC<FacultyMemberProps> = ({ image_url,name, role, linkedin }) => {
  return (
    <div className="w-25 pb-2 bg-white flex flex-col items-center rounded-sm  shadow-[4px__3px_0px] shadow-red-600 m-6 ">
      <img src={image_url} alt="team member" className="w-[90%] h-[40%] mt-2 rounded-lg" />
      <div className="flex flex-col items-center h-[60%] w-full justify-center">
        <h2 className="text-2xl font-game1 w-full ml-8 flex word-wrap text-black">{name}</h2>
        <h2 className="text-lg font-game1 ml-8 word-wrap w-full text-gray-500">{role}</h2>
        <div className="flex  text-xl justify-end  w-[80%] h-[10%] space-x-2 items-center">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacultyMemberCard;
