import { Link } from 'react-router-dom'
const Team = () => {
    return (
        <div className="w-full h-screen flex justify-center items-top pt-24 border-4 border-white">
            <div className="text-6xl font-bold text-white font-game1">
                Meet Our Team
            </div>
            <Link to="/team">
                <div className="text-2xl font-bold text-white font-game1">
                    Learn More
                </div>
            </Link>
        </div>
    )
}

export default Team