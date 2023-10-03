"use client";
import { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function ToggleButtons() {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="timer"
      size="large"
      sx={{backgroundColor:'white'}}
    >
      <ToggleButton value="up" aria-label="increasment">
        <ArrowCircleUpIcon sx={{ color: "black" }} />
      </ToggleButton>
      <ToggleButton value="down" aria-label="decreasment">
        <ArrowCircleDownIcon sx={{ color: "black" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
