import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 75) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 75;
        }
        return prev + (prev < 50 ? 2 : 1); // smooth speed
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box
      sx={{
        height: "100vh",
        background: "#f5f2e9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "2.5rem",
          color: "#d4af37",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "2px",
          mb: 4
        }}
      >
        Sahana & Shreyas
      </Typography>

      {/* Circle Loader */}
      <Box sx={{ position: "relative" }}>
        <svg width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#ddd"
            strokeWidth="8"
            fill="none"
          />

          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#d4af37"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 75 75)"
            style={{
              transition: "stroke-dashoffset 0.3s",
              filter: "drop-shadow(0 0 6px #d4af37)"
            }}
          />
        </svg>

        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#999",
            fontWeight: "bold"
          }}
        >
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
}