import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Venue({ t }) {
  return (
    <Box
      id="venue"
      sx={{
        py: { xs: 6, md: 10 },   // ✅ responsive spacing
        px: { xs: 2, md: 4 },
        background: "#f8f5ef",
        textAlign: "center",
        width: "100%",
        position:"relative"
      }}
    >
      {/* HEADER */}
      <Typography sx={smallHeading}>{t.findWay}</Typography>
      <Typography sx={mainHeading}>{t.title}</Typography>

      {/* MAP */}
      <Box sx={mapCard}>
        <iframe
          title="A & A Convention Hall"
          src="https://www.google.com/maps?q=A%20%26%20A%20Convention%20Hall%20Mandya&output=embed"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          loading="lazy"
        />
      </Box>

      {/* DETAILS */}
      <Box mt={4}>
        <Typography sx={venueTitle}>
          <LocationOnIcon sx={{ color: "#d4af37", mr: 1 }} />
          {t.place}
        </Typography>

        <Typography sx={venueLocation}>{t.location}</Typography>

        {/* BUTTON */}
        <Button
          variant="contained"
          startIcon={<DirectionsIcon />}
          sx={buttonStyle}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/dir/?api=1&destination=A%20%26%20A%20Convention%20Hall%20Mandya",
              "_blank"
            )
          }
        >
          {t.button}
        </Button>
      </Box>

      {/* 🔥 FINAL INVITATION */}
      <Box sx={endingContainer}>
        <Box sx={waveLine} />

        <Typography sx={message}>{t.message}</Typography>

        <Typography sx={namesText}>
          {t.b_Name} & {t.g_Name}
        </Typography>

        <Box sx={divider} />

        <Typography sx={creditText}>
          {t.c_msg} ❤️ {t.coupleTag}
        </Typography>
      </Box>
      <Box
  sx={{
    position: "absolute",
    bottom: 10,
    right: 12,
    fontSize: "0.7rem",
    color: "rgba(0,0,0,0.4)",
    letterSpacing: "1px"
  }}
>
  Creator:@ChaithraGP
</Box>
    </Box>
  );
}

/* ================= STYLES ================= */

const smallHeading = {
  letterSpacing: "4px",
  fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
  color: "#777"
};

const mainHeading = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(1.8rem, 4vw, 2.6rem)", // ✅ responsive
  color: "#d4af37",
  mb: 3
};

/* 🔥 MAP FIX */
const mapCard = {
  maxWidth: "900px",
  margin: "0 auto",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid rgba(212,175,55,0.4)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",

  height: {
    xs: "250px",   // mobile
    sm: "300px",   // tablet
    md: "400px"    // desktop
  }
};

const venueTitle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
  color: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 1
};

const venueLocation = {
  color: "#777",
  fontSize: "clamp(0.8rem, 1.5vw, 1rem)"
};

const buttonStyle = {
  mt: 2,
  background: "#d4af37",
  borderRadius: "25px",
  px: { xs: 3, md: 4 },
  py: 1,
  fontWeight: 600,
  fontSize: "clamp(0.8rem, 1.5vw, 1rem)",

  "&:hover": {
    background: "#b8962e"
  }
};

/* 🔥 END SECTION */

const endingContainer = {
  mt: { xs: 5, md: 8 }, // ✅ spacing fix
  textAlign: "center",
  px: 2
};

const waveLine = {
  width: "120px",
  height: "20px",
  margin: "0 auto 20px",
  borderBottom: "2px solid #d4af37",
  borderRadius: "50%",
  opacity: 0.6
};

const message = {
  maxWidth: "650px",
  margin: "0 auto",
  color: "#777",
  fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
  lineHeight: 1.8,
  textAlign: "center",
  mt: 2
};

const namesText = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  color: "#d4af37",
  mt: 2
};

const divider = {
  width: "60px",
  height: "2px",
  background: "#d4af37",
  margin: "15px auto"
};

const creditText = {
  color: "#999",
  fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)"
};