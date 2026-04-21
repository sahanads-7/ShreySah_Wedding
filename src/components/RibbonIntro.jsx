import { useState } from "react";
import "./RibbonIntro.css";

export default function RibbonIntro({ onFinish }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      onFinish();
    }, 1500); // match curtain animation
  };

  return (
    <div
      className={`ribbon-screen ${open ? "open" : ""}`}
      onClick={handleOpen}
    >
      {/* CURTAINS */}
      <div className="curtain left"></div>
      <div className="curtain right"></div>

      {/* CENTER TEXT */}
      <div className="center-text">
        <h2>Tap Here 💖</h2>
        <p>Shreyas & Sahana</p>
      </div>
    </div>
  );
}