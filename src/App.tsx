import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Home from './components/Home/Home'

function App() {
    return (
        <>
            <div className="App">
                <Home/>
            </div>
            <Analytics/>
        </>  
    )
}

export default App
