import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {

  return (
    <>
    <div className="roaster-page">
      <div className="div">
        <div className="overlap-group">
          <Group className="group-1" />
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper-2">Team</div>
          <div className="text-wrapper-3">Events</div>
          <div className="text-wrapper-4">More</div>
        </div>
        <div className="overlap">
          <div className="group-2">
            <div className="ellipse" />
            <img className="img" alt="Ellipse" src="https://c.animaapp.com/vLpgxBrL/img/ellipse-6.svg" />
          </div>
          <div className="group-3">
            <div className="ellipse-2" />
            <div className="ellipse-3" />
          </div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/vLpgxBrL/img/rectangle-3.svg" />
          <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/vLpgxBrL/img/rectangle-3.svg" />
        </div>
        <img className="rectangle-3" alt="Rectangle" src="https://c.animaapp.com/vLpgxBrL/img/rectangle-2.svg" />
        <div className="text-wrapper-5">Core Team</div>
      </div>
    </div>
    <Analytics/>
    </>
  )
}

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <img
        className="google-DSC-lockup"
        alt="Google DSC lockup"
        src="https://c.animaapp.com/vLpgxBrL/img/google-dsc-lockup-leftaligned-chapter-3x-1-1@2x.png"
      />
      <img className="asset" alt="Asset" src="https://c.animaapp.com/vLpgxBrL/img/asset-3-3x-1-1@2x.png" />
    </div>
  );
}

export default App
