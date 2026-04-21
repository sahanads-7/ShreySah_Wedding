import { useRef, useState , useEffect} from "react";
import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";


export default function MusicPlayer() {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };


  // 🔥 Try autoplay on first load
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => {
            // Autoplay blocked → wait for user interaction
            setPlaying(false);
          });
      }
    };

    playAudio();
      // fallback: play on first user interaction
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);


  return (
    <>
      <audio ref={audioRef} loop src="/music1.mp3" />

      <IconButton
        onClick={toggle}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 99999,   // 🔥 ALWAYS on top
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(6px)",
          "&:hover": {
            background: "rgba(255,255,255,0.9)"
          }
        }}
      >
        {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>
    </>
  );
}