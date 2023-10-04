"use client";

import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { Box, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useState } from "react";
export default function Button() {
  const [isStarted, setISStarted] = useState<boolean | null>(false);

  const handleStart = (
    // event: React.ChangeEvent<HTMLInputElement>,
    // newStatus: string | null
  ) => {
    setISStarted(!isStarted);
  };

  return (
    <Box display={"flex"} gap={5}>
      <Box display={"flex"} flexDirection={"column"} gap={1} onChange={ handleStart} >
        <PlayCircleFilledWhiteIcon 
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Start</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <StopCircleIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Stop</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <RestartAltIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Reset</Typography>
      </Box>
    </Box>
  );
}
