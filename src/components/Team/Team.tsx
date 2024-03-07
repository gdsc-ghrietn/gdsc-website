import teamMebersData from "./Team.json";
import TeamMemberCard from "./TeamMemberCard";
interface TeamMember {
    id: number;
    name: string;
    role: string;
    image_url: string;
    github?: string;
    linkedin?: string;
  }

const Team = () => {
    const member: TeamMember = teamMebersData[14];
    return (
        <div className="w-full h-screen flex justify-center items-top pt-24 border-4 border-white">
            <div className="text-6xl font-bold text-white font-game1">
                Meet Our Team
            </div>
                
            <TeamMemberCard key={member.id} image_url={member.image_url} fullName={member.name} position={member.role} github={member.github} linkedin={member.linkedin} />
        </div>
    )
}

export default Team