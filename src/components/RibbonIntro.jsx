import { useState } from "react";
import "./RibbonIntro.css";

export default function RibbonIntro({ onFinish, onStartMusic }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    // 🎵 START MUSIC immediately on tap (valid user interaction)
    if (onStartMusic) {
      onStartMusic();
    }

    // Continue animation
    setTimeout(() => {
      onFinish();
    }, 1500);
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