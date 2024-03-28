import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TeamPage from "./Pages/TeamPage";
import { useRef, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
    );
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });

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
      <Routes>
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <div
        className="App overflow-x-hidden
      "
      >
        <nav className="fixed w-full flex justify-center lg:p-4 p-2   items-center top-0 z-50">
          <Navbar
            HomeRef={HomeRef}
            AboutRef={AboutRef}
            EventsRef={EventsRef}
            TeamRef={TeamRef}
            ContactRef={ContactRef}
            currentSection={currentSection}
          />
        </nav>
        <section
          id="sectionHome"
          ref={HomeRef}
          className=" h-screen min-h-screen overflow-y-hidden"
        >
          <Home />
        </section>
        <section
          ref={AboutRef}
          id="sectionAbout"
          className=" w-screen  h-screen min-h-screen overflow-y-hidden"
        >
          <About />
        </section>
        <section
          ref={EventsRef}
          className=" w-screen  h-screen min-h-screen overflow-y-hidden"
          id="sectionEvents"
        >
          <Events />
        </section>
        <section
          ref={TeamRef}
          className="w-screen  h-screen min-h-screen overflow-y-hidden"
          id="sectionTeam"
        >
          <Team />
        </section>
        <section
          ref={ContactRef}
          className="w-screen  h-screen min-h-screen max-h-screen overflow-y-hidden"
          id="sectionContact"
        >
          <Contact />
        </section>
        <section
          ref={ContactRef}
          className="w-screen  h-[5rem] min-h-[5rem] max-h-[5rem] overflow-y-hidden"
          id="sectionContact"
        >
          <Footer />
        </section>
      </div>
      <Analytics />
    </>
  );
}

export default App;
