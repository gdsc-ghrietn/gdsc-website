import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className='App '>
        <div className='max-h-screen'>
          <div className='sticky  h-full z-50 drop-shadow-xl   flex justify-center '>
            <Navbar />
          </div>

          <motion.div
            style={{
              height: "100vh",
              overflowY: "auto",
              scrollSnapType: "y proximity",
              scrollBehavior: "smooth",
            }}
            transition={{ ease: "easeInOut" }}
            className='top-0 fixed'
          >
            <motion.div
              animate={{
                height: "100vh",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
              id='Home'
            >
              <Home />
            </motion.div>
            <motion.div
              animate={{
                height: "100vh",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
              id='About'
            >
              <About />
            </motion.div>
            <motion.div
              animate={{
                height: "100vh",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
              id='Events'
            >
              <Events />
            </motion.div>
            <motion.div
              animate={{
                height: "100vh",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
              id='Team'
            >
              <Team />
            </motion.div>

            <motion.div
              animate={{
                height: "100vh",
                scrollSnapAlign: "end",
                scrollSnapStop: "always",
              }}
              className='flex flex-col justify-between'
              id='Contact'
            >
              <div style={{ maxHeight: "90vh" }}>
                <Contact />
              </div>

              <div style={{ height: "10vh" }}>
                <Footer />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
