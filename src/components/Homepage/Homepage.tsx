import './Homepage.styles.css'
import Navbar from '../Navbar/Navbar'
import Events from '../Events/Events'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Team from '../Team/Team'
import ContactUs from '../Contact Us/ContactUs'

function Homepage() {

  return (
      <div className="homepage">
        <div>
          <Navbar/>
        </div>
  
        <About/>
        <Events/>
        <Team/>
        <ContactUs/>
        <Footer/>
      </div>
  )
}

export default Homepage
