import Countdown from "react-countdown";
import { Typography } from "@mui/material";

export default function CountdownTimer() {
  return (
    <Typography variant="h5" align="center">
      <Countdown date="2026-12-10T09:00:00" />
    </Typography>
  );
}
