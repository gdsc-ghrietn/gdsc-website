import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamMembersData from "./Team.json";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image_url: string;
    github?: string;
    linkedin?: string;
}

const TeamCarousel: React.FC = () => {
    const teamMembers: TeamMember[] = teamMembersData;
    const isMobileWidth = window.innerWidth < 650

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        slidesPerRow: 1,
        speed: 500,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rows: 2,
                    slidesPerRow: 1,
                },
            },

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 2,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 2,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                    slidesPerRow: 1,
                    dots: false,
                },
            },

            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    dots: false,
                },
            },
        ],
    };

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
        <div className="w-screen h-screen pt-14 border-4 border-white">
            <div className="flex justify-center items-center flex-col">
                <div className="text-6xl font-bold text-white font-game1">
                    Meet Our Team
                </div>
                <Slider {...settings} className={`w-[65%] ${isMobileWidth && "mt-12"}`}>
                    {teamMembers.slice(0, 8).map((member) => {
                        handleImageImport(member);
                        return (
                            <TeamMemberCard key={member.id} image_url={member.image_url} fullName={member.name} position={member.role} github={member.github} linkedin={member.linkedin} />
                        );
                    })}
                </Slider>
            </div >
        </div >
    );
};

export default TeamCarousel;
