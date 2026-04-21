import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import RibbonIntro from "./components/RibbonIntro";
import MusicPlayer from "./components/MusicPlayer";
import HeartButton from "./components/HeartButton";
import Header from "./components/Header";

import Venue from "./components/Venue";
import WaveDivider from "./components/WaveDivider";
import Events from "./components/Events";
import Leaves from "./components/Leaves";
import Gallery from "./components/Gallery";
import SaveDatePopup from "./components/SaveDatePopup";
import NameAnimation from "./components/NameAnimation";

import {
  event_content,
  gallery_content,
  venue_content,
  content_names
} from "./data/content";

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [opened, setOpened] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [lang, setLang] = useState("en");
  const [openPopup, setOpenPopup] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [showNameAnim, setShowNameAnim] = useState(false);


  const t = content_names[lang];

  /* AUTO SCROLL */
  useEffect(() => {
   if (!autoScroll) return;

    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        window.scrollBy(0, 1);
      }, 20);
    };

    const stopScroll = () => {
      clearInterval(interval);
      setAutoScroll(false);
    };

    startScroll();

    window.addEventListener("wheel", stopScroll);
    window.addEventListener("touchstart", stopScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
    };
  }, [opened, autoScroll]);

  /* POPUP AT END */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 50 && !openPopup) {
        setOpenPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openPopup]);

  if (!loadingDone) {
    return <LoadingScreen onComplete={() => setLoadingDone(true)} />;
  }

  // if (!opened) {
  //   return <RibbonIntro onFinish={() => setOpened(true)} />;
  // }

  return (
    <>
     {!showIntro && (<Header setLang={setLang} stopAutoScroll={() => setAutoScroll(false)} />)}

     {!showIntro && <MusicPlayer />}
      <HeartButton />
      <Leaves />
      

      {/* ================= HOME ================= */}
      <section
       id="home"
  className="section-wrapper"
  style={{ position: "relative", overflow: "hidden" }}
      >
        {/* BACKGROUND */}
        <div style={bgStyle} />
        <div style={overlayStyle} />

        {/* CONTENT */}
        <div style={contentStyle}>
          <h1 style={nameStyle}>{t.brideName}</h1>

          <span className="infinity-container">
            <svg viewBox="0 0 200 60" className="infinity-svg">
              <path
                d="M20,30 
                C20,5 80,5 100,30 
                C120,55 180,55 180,30 
                C180,5 120,5 100,30 
                C80,55 20,55 20,30"
                fill="none"
                stroke="#e34a17"
                strokeWidth="3"
              />
            </svg>
            <span className="love-text">LOVE</span>
          </span>

          <h1 style={nameStyle}>{t.groomName}</h1>

          <div style={lineStyle} />

          <div style={dateStyle}>{t.monthYear}</div>
        </div>

{showNameAnim && <NameAnimation />}
  {/* INTRO ANIMATION INSIDE HOME */}
{showIntro && (
  <RibbonIntro
    onFinish={() => {
      setShowIntro(false);
      setAutoScroll(true);
      // 🔥 trigger name animation after curtain opens
      setTimeout(() => {
        setShowNameAnim(true);

        // auto hide animation
        setTimeout(() => setShowNameAnim(false), 4000);
      }, 1000);
    }}
  />
)}


        
      </section>

    
      {/* EVENTS */}
      <section id="events" className="section-wrapper">
        <Events t={event_content[lang]} />
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-wrapper">
        <Gallery t={gallery_content[lang]} />
      </section>

      {/* VENUE */}
      <section id="venue" className="section-wrapper">
        <Venue t={venue_content[lang]} />
      </section>

      <SaveDatePopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}

/* ================= STYLES ================= */

const bgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('/D.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "60% center",
  zIndex: 0
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.75))"
};

const contentStyle = {
  position: "relative",
  zIndex: 2,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  width: "100%",
  padding: "0 20px" // keeps spacing on mobile
};

const nameStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(2.2rem, 7vw, 4rem)",
  color: "#d4af37",
  fontWeight: 500,
  letterSpacing: "2px",
  margin: 0
};

const lineStyle = {
  width: "clamp(120px, 40vw, 250px)",
  height: "2px",
  background: "#d4af37",
  margin: "15px auto",
  animation: "elegantBlink 2s ease-in-out infinite"
};

const dateStyle = {
  color: "#666",
  letterSpacing: "2px",
  fontSize: "clamp(0.7rem, 3vw, 1rem)",
  marginTop: "5px"
};