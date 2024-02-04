import React from 'react';
import FacultyData from './Faculty.json';
import './faculty.styles.css';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

interface Faculty {
  id: number;
  name: string;
  role: string;
  image_url: string;
}

const Faculty: React.FC = () => {
  const faculties: Faculty[] = FacultyData;

  return (
    <div id="faculty-section">
        <h1 className="heading">Our Faculty Advisors</h1>
        <div className="faculty-carousel">
            {faculties.map((faculty) => (
            <div key={faculty.id} className='facultycarousel-item'>
                <div className="faculty-advisor">
                  <div className='image-container'>
                    <img
                        className="faculty-advisor-image"
                        src={faculty.image_url}
                        alt={faculty.name}
                    />
                  </div>
                  <div className="faculty-data">
                    <h2 className="faculty-advisor-name">{faculty.name}</h2>
                    <h3 className="faculty-advisor-role">{faculty.role}</h3>
                  </div>
                </div>
            </div>
            ))}
        </div>
        <hr style={{width: "80%", marginTop: "20px",borderRadius:"10px",border:"4px solid  #fff"}}/>
    </div>
  );
};

export default Faculty;
