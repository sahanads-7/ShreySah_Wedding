import { Box, Typography, Grid, Card } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Events({ t }) {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        width: "100%",
        overflowX: "hidden" // 🔥 FIX
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center" }}>
        <Typography sx={smallHeading}>{t.joinUs}</Typography>
        <Typography sx={mainHeading}>{t.eventsTitle}</Typography>

        <Grid container spacing={2} mt={3}>
          {/* CARD */}
          {[ 
            { title: t.reception, date: t.recDate, time: t.recTime, venue: t.venue },
            { title: t.muhurtha, date: t.muhDate, time: t.muhTime, venue: t.venue },
            { title: t.beegaroota, date: t.begDate, time: t.begTime, venue: t.beg_venue }
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{display:"flex"}}>
              <Card sx={cardStyle}>
                <Typography sx={title}>{item.title}</Typography>

                <Info icon={<EventIcon />} text={item.date} />
                <Info icon={<AccessTimeIcon />} text={item.time} />
                <Info icon={<LocationOnIcon />} text={item.venue} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

function Info({ icon, text }) {
  return (
    <Box sx={infoRow}>
      <Box sx={{ color: "#d4af37" }}>{icon}</Box>
      <Typography>{text}</Typography>
    </Box>
  );
}

/* STYLES */

const smallHeading = {
  letterSpacing: "4px",
  fontSize: "0.8rem",
  color: "#777"
};

const mainHeading = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(2rem, 5vw, 2.5rem)",
  color: "#d4af37"
};

const cardStyle = {
  width: "100%",       // 🔥 FIX
  p: 3,
  borderRadius: "20px",
  background: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(212,175,55,0.4)"
};

const title = {
  fontSize: "1.5rem",
  fontWeight: 600,
  mb: 2,
  textAlign: "center"
};

const infoRow = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mb: 1,
  justifyContent: "center"
};