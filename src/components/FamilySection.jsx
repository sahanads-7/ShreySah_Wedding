import { Box, Typography, Grid, Card } from "@mui/material";

export default function FamilySection({ t }) {
  return (
    <Box
      id="family"
      sx={{
        py: 6,
        px: 2,
        display: "flex",
        width:"100%",
        justifyContent: "center",
        background: "#d9d6cc",
        opacity:"0.5"
      }}
    >
      {/* 🔥 Parent Card */}
      <Card sx={parentCard}>
        
        <Typography sx={heading}>
          {t.blessings}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          
          {/* 👰 Bride Side */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: "center" }}>
              
              <Typography sx={title}>
                {t.brideParents}
              </Typography>

              <Card sx={childCard}>
                <Typography sx={name}>
                  {t.brideMother}
                </Typography>
              </Card>

              <Typography sx={amp}>&</Typography>

              <Card sx={childCard}>
                <Typography sx={name}>
                  {t.brideFather}
                </Typography>
              </Card>

            </Box>
          </Grid>

          {/* 🤵 Groom Side */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: "center" }}>
              
              <Typography sx={title}>
                {t.groomParents}
              </Typography>

              <Card sx={childCard}>
                <Typography sx={name}>
                  {t.groomMother}
                </Typography>
              </Card>

              <Typography sx={amp}>&</Typography>

              <Card sx={childCard}>
                <Typography sx={name}>
                  {t.groomFather}
                </Typography>
              </Card>

            </Box>
          </Grid>

        </Grid>
      </Card>
    </Box>
  );
}

/* 🔥 Styles */

const parentCard = {
  width: "100%",
  maxWidth: "900px",
  p: 4,
  borderRadius: "20px",
  background: "#ffff",
  backdropFilter: "blur(12px)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.15)"
};

const heading = {
  textAlign: "center",
  letterSpacing: "4px",
  color: "#777",
  fontSize: "0.9rem",
  mb: 4
};

const title = {
  fontSize: "0.8rem",
  letterSpacing: "3px",
  color: "#999",
  mb: 2
};

const childCard = {
  p: 2,
  mb: 1,
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  "&:hover": {
  transform: "translateY(-5px)"
},
border: "1px solid rgba(212,175,55,0.3)"
};

const name = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "1.5rem",
  color: "#2d2d2d"
};

const amp = {
  color: "#d4af37",
  my: 1
};