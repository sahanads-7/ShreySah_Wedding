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

      {/* 💖 AFTER EVENT MESSAGE */}
      <Box sx={afterContainer}>
        
        <Typography sx={afterTitle}>
          {t.afterMessageTitle}
        </Typography>

        <Box sx={afterLine} />

        <Typography sx={afterText}>
          {t.afterMessage}
        </Typography>

        <Typography sx={afterSign}>
          {t.b_Name} & {t.g_Name} 💛
        </Typography>

      </Box>
      </Box>
    </Box>
  );
}

function Info({ icon, text, type }) {
  return (
    <Box sx={infoRow}>
      <Box sx={{ color: "#d4af37" }}>{icon}</Box>
      <Typography
        sx={{
          color: "#555",
          fontWeight: type === "date" ? 600 : 400
        }}
      >
        {text}
      </Typography>
    </Box>);
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
/* 💖 AFTER MESSAGE */

const afterContainer = {
  mt: 8,
  maxWidth: "800px",
  margin: "60px auto 0",
  textAlign: "center"
};

const afterTitle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "2rem",
  color: "#d4af37",
  mb: 2
};

const afterLine = {
  width: "80px",
  height: "2px",
  background: "#d4af37",
  margin: "10px auto 20px",
  opacity: 0.6
};

const afterText = {
  color: "#666",
  lineHeight: 1.9,
  fontSize: "1rem",
  whiteSpace: "pre-line"
};

const afterSign = {
  marginTop: "25px",
  fontFamily: "'Playfair Display', serif",
  fontSize: "1.4rem",
  color: "#d4af37"
};