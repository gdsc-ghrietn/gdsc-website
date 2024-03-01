import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import { useEffect, useState, useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    ); // Change threshold as per requirement

    // Get all sections
    const sections = document.querySelectorAll("section");

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    console.log(currentSection);

    // Cleanup function
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [currentSection]);

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const EventsRef = useRef(null);
  const TeamRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <>
      <div className='App'>
        <div
          className='absolute overflow-auto overflow-x-hidden min-w-screen  h-full w-screen  top-0 left-0  overflow: auto;'
          id='containerElement'
        >
          <nav className='fixed w-screen flex justify-center   items-center top-0 z-50 lg:pt-2'>
            <Navbar
              HomeRef={HomeRef}
              AboutRef={AboutRef}
              EventsRef={EventsRef}
              TeamRef={TeamRef}
              ContactRef={ContactRef}
              currentSection={currentSection}
              
            />
          </nav>

          <div className='  top-0  flex flex-col'>
            <section
              id='sectionHome'
              ref={HomeRef}
              className='relative h-screen min-h-screen'
            >
              <Home />
            </section>
            <section
              ref={AboutRef}
              id='sectionAbout'
              className=' w-screen  h-screen min-h-screen'
              style={{ position: "relative" }}
            >
              <About />
            </section>
            <section
              ref={EventsRef}
              className=' w-screen relative h-screen min-h-screen'
              id='sectionEvents'
            >
              <Events />
            </section>
            <section
              ref={TeamRef}
              className='w-screen relative h-screen min-h-screen'
              id='sectionTeam'
            >
              <Team />
            </section>
            <section
              ref={ContactRef}
              className='w-screen relative h-screen min-h-screen max-h-screen'
              id='sectionContact'
            >
              <Contact />
            </section>
          </div>
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
