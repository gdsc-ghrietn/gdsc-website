import React from "react";
import { TeamMember } from "../components/Team/Team";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import teamMembersData from "../components/Team/Team.json";

const TeamPage = () => {
  const teamMembers: TeamMember[] = teamMembersData;
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
    <div className="h-full z-20 w-full font-game2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teamMembers.map((member: TeamMember) => {
        handleImageImport(member);
        return (
          <div className="w-[16rem]" key={member.id}>
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
  );
}

export default TeamPage
