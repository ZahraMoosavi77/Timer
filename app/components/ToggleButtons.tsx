"use client";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Typography } from "@mui/material";

export default function ToggleButtons() {
  const [direction, setDirection] = useState<string | null>("down");

  const handleDirection = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setDirection(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={direction}
      exclusive
      onChange={handleDirection}
      aria-label="timer"
      size="large"
      sx={{ backgroundColor: "white" }}
    >
      <ToggleButton
        value="up"
        aria-label="increasment"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <Typography variant="body1" component="p" sx={{ color: "black" }}>
          Increase
        </Typography>
        <KeyboardDoubleArrowUpIcon sx={{ color: "black" }} />
      </ToggleButton>
      <ToggleButton
        value="down"
        aria-label="decreasment"
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <Typography variant="body1" component="p" sx={{ color: "black" }}>
          Decrease
        </Typography>
        <KeyboardDoubleArrowDownIcon sx={{ color: "black" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
