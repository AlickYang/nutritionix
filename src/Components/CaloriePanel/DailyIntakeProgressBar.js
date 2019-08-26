import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
function DailyIntakeProgressBar({ total }) {
  let percent = (total / 1500) * 100;
  percent >= 100 ? (percent = 100) : (percent = Math.round(percent));
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <LinearProgress variant="determinate" value={percent} />
      <Typography variant="body1" style={{ textAlign: "center" }}>
        {percent}%
      </Typography>
    </div>
  );
}

export default DailyIntakeProgressBar;
