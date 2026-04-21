import {
  Dialog,
  Box,
  Typography,
  Button,
  IconButton
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DownloadIcon from "@mui/icons-material/Download";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { useState } from "react";

export default function SaveDatePopup({ open, onClose }) {
  const [showThanks, setShowThanks] = useState(false);

  // 📅 GOOGLE CALENDAR
  const openGoogleCalendar = (title, date, time) => {
    const start = "20260503T190000";
    const end = "20260503T220000";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=Wedding Event&location=A&A Convention Hall Mandya`;

    window.open(url, "_blank");
  };

  // 📥 ICS DOWNLOAD
  const downloadICS = (title) => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:20260503T190000
DTEND:20260503T220000
LOCATION:A&A Convention Hall Mandya
DESCRIPTION:Wedding Event
END:VEVENT
END:VCALENDAR
    `;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics";
    a.click();
  };

  // 👍 CTA
  const handleConfirm = () => {
    setShowThanks(true);

    setTimeout(() => {
      setShowThanks(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: dialogPaper
      }}
    >
      <Box sx={container}>
        {/* CLOSE */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>

        {!showThanks ? (
          <>
            <Typography sx={title}>Save Our Date ✨</Typography>

            <Typography sx={subtitle}>
              Mark this beautiful day in your calendar 💛
            </Typography>

            {/* RECEPTION */}
            <Box sx={card}>
              <Typography sx={eventTitle}>Reception</Typography>

              <Box sx={btnRow}>
                <Button
                  startIcon={<EventAvailableIcon />}
                  sx={smallBtn}
                  onClick={() =>
                    openGoogleCalendar("Reception", "20260503", "1900")
                  }
                >
                  GOOGLE
                </Button>

                <Button
                  startIcon={<DownloadIcon />}
                  sx={smallBtn}
                  onClick={() => downloadICS("Reception")}
                >
                  .ICS
                </Button>
              </Box>
            </Box>

            {/* MUHURTHA */}
            <Box sx={card}>
              <Typography sx={eventTitle}>Muhurtha</Typography>

              <Box sx={btnRow}>
                <Button
                  startIcon={<EventAvailableIcon />}
                  sx={smallBtn}
                  onClick={() =>
                    openGoogleCalendar("Muhurtha", "20260504", "1030")
                  }
                >
                  GOOGLE
                </Button>

                <Button
                  startIcon={<DownloadIcon />}
                  sx={smallBtn}
                  onClick={() => downloadICS("Muhurtha")}
                >
                  .ICS
                </Button>
              </Box>
            </Box>

            {/* CTA */}
            <Button sx={mainBtn} onClick={handleConfirm}>
              I'll be there! 💛
            </Button>
          </>
        ) : (
          <Box sx={thanksBox}>
            <ThumbUpIcon sx={thumbIcon} />
            <Typography sx={thanksText}>
              Thank you! See you there 💛
            </Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
}

/* ================= STYLES ================= */

const dialogPaper = {
  borderRadius: "16px",
  width: "90%",
  maxWidth: "420px",
  margin: "10px",
  maxHeight: "90vh",
  overflowY: "auto"
};

const container = {
  p: { xs: 2.5, md: 4 },
  textAlign: "center",
  position: "relative",
  background: "#f8f3e7"
};

const title = {
  fontFamily: "'Playfair Display', serif",
  fontSize: { xs: "1.4rem", md: "1.8rem" },
  color: "#d4af37",
  mb: 2
};

const subtitle = {
  color: "#666",
  mb: 3,
  fontSize: { xs: "0.9rem", md: "1rem" }
};

/* 🔥 FIXED CARD */
const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexWrap: "wrap",     // 🔥 MOBILE FIX
  gap: 1,

  border: "1px solid rgba(212,175,55,0.4)",
  borderRadius: "12px",
  p: 2,
  mb: 2
};

const eventTitle = {
  fontWeight: 600,
  fontSize: { xs: "0.95rem", md: "1rem" }
};

/* 🔥 BUTTON ROW FIX */
const btnRow = {
  display: "flex",
  gap: 1,
  flexWrap: "wrap",
  justifyContent: "flex-end"
};

const smallBtn = {
  border: "1px solid #d4af37",
  color: "#d4af37",
  borderRadius: "20px",
  fontSize: "0.7rem",
  px: 1.5
};

/* 🔥 CTA FIX */
const mainBtn = {
  mt: 3,
  width: "100%",
  background: "#d4af37",
  color: "#fff",
  borderRadius: "30px",
  py: 1.2,
  "&:hover": {
    background: "#b8962e"
  }
};

/* 👍 THANK YOU */

const thanksBox = {
  py: 5,
  textAlign: "center"
};

const thumbIcon = {
  fontSize: "clamp(50px, 15vw, 90px)", // 🔥 responsive
  color: "#d4af37",
  animation: "pop 0.6s ease"
};

const thanksText = {
  mt: 2,
  fontSize: "1rem",
  color: "#555"
};