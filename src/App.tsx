import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TeamPage from "./Pages/TeamPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
