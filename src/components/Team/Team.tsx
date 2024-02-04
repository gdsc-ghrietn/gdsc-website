import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teamMembersData from './Team.json';
import './Team.styles.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image_url: string;
}

const TeamCarousel: React.FC = () => {
  const teamMembers: TeamMember[] = teamMembersData;

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
           slidesToScroll:1,
           slidesPerRow: 1,
           rows:1,
           dots:false,
         },
       },
      
    ],
  };

  return (
    <div id="team-section">
        <h1 className="heading">Team</h1>
        <Slider {...settings} className="team-carousel">
            {teamMembers.map((teamMember) => (
            <div key={teamMember.id} className='teamcarousel-item'>
                <div className="team-member">
                <img
                    className="team-member-image"
                    src={teamMember.image_url}
                    alt={teamMember.name}
                />
                <div className='team-data' >
                <h2 className="team-member-name">{teamMember.name}</h2>
                <h3 className="team-member-role">{teamMember.role}</h3>
                </div>
                </div>
            </div>
            ))}
        </Slider>
    </div>
  );
};

export default TeamCarousel;
