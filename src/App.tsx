import { Analytics } from '@vercel/analytics/react'
import './App.css'

import Homepage from './components/Homepage/Homepage'
function App() {
  return (
    <>
      <div className="App">
        <Homepage/>
      </div>
    <Analytics/>
    </>  
  )
}

export default App
