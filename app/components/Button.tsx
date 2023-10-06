"use client";

import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { Box, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import {useTimerContext} from "../../hooks/useTimerContext"
export default function Button() {
  

    const {isCounting, setIsCounting,setIsReset,setTime} = useTimerContext()
  const handleStart = (
  ) => {
    setIsCounting(true);
    setIsReset(false);
    // const now: any = new Date();
    //     const difference = target.getTime() - now.getTime(); // بیارشون اون ور استفاده کن
    // دیفرنس باید برابر عدد کانتر بالارونده قزار بگیرد همان تایم
    
    
  };

  const handleStop= ()=>{
    setIsCounting(false);
    setIsReset(false)

  }

  const handleReset=()=>{
      setIsReset(true)
      setTime(0)
  }
  
  

  return (
    <Box display={"flex"} gap={5}>
      <Box display={"flex"} flexDirection={"column"} gap={1} onClick={ handleStart} >
        <PlayCircleFilledWhiteIcon 
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Start</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}  onClick={handleStop}>
        <StopCircleIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Stop</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1} onClick={handleReset}>
        <RestartAltIcon 
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Reset</Typography>
      </Box>
    </Box>
  );
}
