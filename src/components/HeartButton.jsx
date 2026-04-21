import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

export default function HeartButton() {
  return (
    <IconButton
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        background: "#fff"
      }}
    >
      <FavoriteIcon color="error" />
    </IconButton>
  );
}