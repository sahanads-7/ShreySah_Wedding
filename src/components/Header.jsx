import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const menu = ["home", "events", "gallery", "venue"];

export default function Header({ stopAutoScroll, setLang }) {
  const [active, setActive] = useState("home");
   const [langState, setLangState] = useState("en");

  const handleClick = (item) => {
    if (stopAutoScroll) stopAutoScroll();

    const element = document.getElementById(item);

    if (element) {
      const yOffset = -60; // 🔥 match header height
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setActive(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menu.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const handleLangToggle = () => {
    const newLang = langState === "en" ? "kn" : "en";
    setLangState(newLang);
    setLang(newLang);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: "60px",
        background: "rgba(37, 150, 190,0.25)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        justifyContent: "center"
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "60px !important", // 🔥 IMPORTANT FIX
          px: 2,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* MENU */}
        <Box
          sx={{
            display: "flex",
            gap: { md: 4 },
            flexGrow: 1,
            justifyContent: { xs: "flex-start", md: "center" },
            overflowX: "auto",
            whiteSpace: "nowrap",

            "&::-webkit-scrollbar": { display: "none" }
          }}
        >
          
          {menu.map((item) => (
            <Typography
              key={item}
              onClick={() => handleClick(item)}
              sx={{
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: 1,
                px: 1.5,
                py: "4px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                flexShrink: 0,
              

                color:
                  active === item
                    ? "#1c1b19"
                    : "rgba(57, 54, 54, 0.9)",

                background:
                  active === item
                    ? "#d4af37"
                    : "transparent"
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* LANGUAGE */}
       {/* 🌐 SINGLE TOGGLE BUTTON */}
        <Button
          onClick={handleLangToggle}
          size="small"
          sx={{
            color:"#1e1d1c",
            background:"#d4af37",
            fontSize: "0.7rem",
            minWidth: "50px",
            ml: 1
          }}
        >
          {langState === "en" ? "ಕನ್ನಡ" : "EN"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}