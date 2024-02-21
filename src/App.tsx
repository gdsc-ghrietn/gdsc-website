import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />

        <motion.div
          style={{
            height: "100vh",
            overflowY: "auto",
            scrollSnapType: "y mandatory",
            scrollBehavior: "smooth",
          }}
          transition={{ ease: "easeInOut" }}
        >
          <motion.div
            animate={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
            id='home'
          >
            <Home />
          </motion.div>
          <motion.div
            animate={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
            id='about'
          >
            <About />
          </motion.div>
          <motion.div
            animate={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
            id='events'
          >
            <Events />
          </motion.div>
          <motion.div
            animate={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
            id='team'
          >
            <Team />
          </motion.div>
          <motion.div
            animate={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
            id='contact'
          >
            <Contact />
          </motion.div>
        </motion.div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
