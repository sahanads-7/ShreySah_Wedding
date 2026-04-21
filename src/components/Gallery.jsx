import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/gallery/A.jpeg" },
  { src: "/gallery/B.jpeg" },
  
   { src: "/gallery/S.jpeg" },
 
   { src: "/gallery/D.jpeg" },
 
  // { src: "/gallery/F.jpeg" },
  // { src: "/gallery/I.jpeg" },
   { src: "/gallery/J.jpeg" },
     { src: "/gallery/C.jpeg" },
   
 

  

];

export default function Gallery({t}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Box id="gallery" sx={{ py: 10, px: 2, background: "#f8f5ef", width:"100%" }}>
      
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography sx={smallHeading}>{t.smallTitle}</Typography>
      <Typography sx={mainHeading}>{t.mainTitle}</Typography>
      <Typography sx={dateText}>{t.date}</Typography>
      </Box>

      {/* GRID */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={3}>
          {images.map((img, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              
              <Box
                sx={imageCard}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt="gallery"
                  style={imgStyle}
                />
              </Box>

            </Grid>
          ))}
        </Grid>
      </Box>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </Box>
  );
}
const smallHeading = {
  letterSpacing: "4px",
  fontSize: "0.8rem",
  color: "#777"
};

const mainHeading = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "2.8rem",
  color: "#d4af37",
  mb: 1
};

const dateStyle = {
  color: "#888",
  fontSize: "0.95rem"
};

/* 🔥 MAGIC HAPPENS HERE */
const imageCard = {
  height: "280px",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",

  "& img": {
    transition: "transform 2s ease"
  },

  "&:hover img": {
    transform: "scale(1.12)"   // 🔥 ZOOM IN
  }
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};
const dateText = {
  color: "#777",
  marginTop: "8px"
};