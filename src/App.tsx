import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/navbar'

function App() {
    return (
        <>
            <div className="App">
                <Navbar/>
                <Home/>
            </div>
            <Analytics/>
        </>  
    )
}

export default App
