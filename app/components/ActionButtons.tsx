"use client";

import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { Box, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import dayjs, { Dayjs } from "dayjs";
import  { useState,useContext} from "react";

import { useTimerContext } from "../../hooks/useTimerContext";
import { TimePicker} from "@/context/second";
export default function Button() {
  const { isCounting, setIsCounting, setIsReset, setTime, setIsEnd,value,setIsWrongTarget,isWrongTarget } =
    useTimerContext();
    // const value = useContext(TimePicker)

  const handleStart = () => {
    setIsCounting(true);
    setIsReset(false);
    setIsEnd(false);
    
    const timeStart: any = new Date();
    const REACHTIME = value;
    const ReachYear = dayjs(REACHTIME).year();
    const Reachm = dayjs(REACHTIME).month();
    const Reachd = dayjs(REACHTIME).date();
    const Reachh = dayjs(REACHTIME).hour();
    const Reachmi = dayjs(REACHTIME).minute();
    const Reachs = dayjs(REACHTIME).second();
    const target: any = new Date(
      `${Reachm + 1}/${Reachd}/${ReachYear} ${Reachh}:${Reachmi}:${Reachs}`
    );
        const difference = target.getTime() - timeStart.getTime();
         // بیارشون اون ور استفاده کن
    // دیفرنس باید برابر عدد کانتر بالارونده قزار بگیرد همان تایم

    if(difference<=0) {setIsWrongTarget(true); console.log(isWrongTarget);}
    else setIsWrongTarget(false)
    
    
  };

  const handleStop = () => {
    setIsCounting(false);
    setIsReset(false);
    setIsEnd(false);
  };

  const handleReset = () => {
    setIsReset(true);
    setTime(0);
    setIsEnd(false);
  };

  return (
    <Box display={"flex"} gap={5}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        onClick={handleStart}
      >
        <PlayCircleFilledWhiteIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Start</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        onClick={handleStop}
      >
        <StopCircleIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Stop</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        onClick={handleReset}
      >
        <RestartAltIcon
          sx={{ color: "white", width: "36px", height: "36px" }}
        />
        <Typography color={"white"}>Reset</Typography>
      </Box>
    </Box>
  );
}
