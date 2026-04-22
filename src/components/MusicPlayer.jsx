import { useRef, useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function MusicPlayer({ startMusic }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = false;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

const toggle = () => {
  if (!audioRef.current) return;

  if (playing) {
    audioRef.current.pause();
    setPlaying(false);
  } else {
    audioRef.current.muted = false;
    audioRef.current.play();
    setPlaying(true);
  }
};

  // 🔥 Play ONLY when intro is completed
useEffect(() => {
  if (startMusic && audioRef.current) {
    audioRef.current.muted = false;

    audioRef.current.play()
      .then(() => {
        setPlaying(true);   // ✅ FIX: update icon
      })
      .catch(() => {
        setPlaying(false);
      });
  }
}, [startMusic]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={`${process.env.PUBLIC_URL}/music1.mp3`}
      />

      <IconButton
        onClick={toggle}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 99999,
          background: "rgba(255,255,255,0.7)"
        }}
      >
        {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </>
  );
}