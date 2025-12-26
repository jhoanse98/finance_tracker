import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  budget: number;
  expenses: number;
}

const CircularProgressComponent = ({ budget, expenses }: Props) => {
  const circularColor = {
    0: "grey",
    25: "red",
    50: "orange",
    75: "blue",
  };

  const getColor = (value: number) => {
    if (value === 0) return circularColor[0];
    if (value > 0 && value < 50) return circularColor[25];
    if (value >= 50 && value < 75) return circularColor[50];
    if (value >= 75) return circularColor[75];
  };

  const percentage = budget !== 0 ? 100 - (expenses * 100) / budget : 0;

  return (
    <div
      style={{
        width: 200,
        height: 200,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 24,
          fontWeight: "bold",
          margin: 0,
        }}
      >
        {percentage.toFixed(2)}%
      </p>
      <CircularProgress
        variant="determinate"
        size={200}
        value={percentage === 0 ? 100 : percentage}
        sx={{
          color: getColor(percentage),
        }}
      />
    </div>
  );
};

export default CircularProgressComponent;
