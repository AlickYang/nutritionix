import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
function DailyIntakeProgressBar() {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <LinearProgress variant="determinate" value={86} />
      <Typography variant="body1" style={{ textAlign: "center" }}>
        86%
      </Typography>
    </div>
  );
}

export default DailyIntakeProgressBar;
