import './Homepage.styles.css'
import Navbar from '../Navbar/Navbar'
import Events from '../Events/Events'
import Footer from '../Footer/Footer'
import About from '../About/About'
import TeamCarousel from '../Team/Team'
import ContactUs from '../Contact Us/ContactUs'
import Faculty from '../Faculty/Faculty'

const Homepage: React.FC = () => {

  return (
      <div className="homepage">
        <div>
          <Navbar/>
        </div>
  
        <About/>
        <Events/>
        <Faculty/>
        <TeamCarousel/>
        <div className='parallax'>
          <ContactUs/>
          <Footer/>
        </div>
      </div>
  )
}

export default Homepage
