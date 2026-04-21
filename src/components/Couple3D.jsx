import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Couple3D({ bride, groom }) {
  return (
    <Box sx={{ display: "flex", gap: 5, justifyContent: "center", p: 5 }}>
      {[bride, groom].map((name, i) => (
        <motion.div
          key={i}
          whileHover={{ rotateY: 20, scale: 1.1 }}
        >
          <Card sx={{ p: 4, background: "#111", color: "#fff" }}>
            <Typography variant="h4">{name}</Typography>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
}