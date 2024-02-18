import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Events from './components/Events/Events'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'

function App() {
    return (
        <>
            <div className="App">
                <Navbar/>
                <Home/>
                <About/>
                <Events/>
                <Team/>
                <Contact/>
            </div>
            <Analytics/>
        </>  
    )
}

export default App
