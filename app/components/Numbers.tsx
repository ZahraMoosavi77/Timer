"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import Number from "./Number";
import { useTimerContext } from "../../hooks/useTimerContext";
import dayjs, { Dayjs } from "dayjs";

export default function Numbers() {
  const {
    isCounting,
    setTime,
    time,
    setMinutes,
    setDays,
    setHours,
    setMonths,
    setYears,
    setSeconds,
    days,
    months,
    years,
    hours,
    minutes,
    seconds,
    isReset,
    setIsReset,
    value,
    setValue,
    setIsEnd,
    isEnd,
    isUp,
  } = useTimerContext();
  const a = [
    { name: "Year", value: years },
    { name: "Mounth", value: months },
    { name: "Days", value: days },
    { name: "Hours", value: hours },
    { name: "Minutes", value: minutes },
    { name: "Seconds", value: seconds },
  ];

  const REACHTIME = value;

  const interval: any = useRef(null);
  const downInterval: any = useRef(null);

  const ReachYear = dayjs(REACHTIME).year();
  const Reachm = dayjs(REACHTIME).month();
  const Reachd = dayjs(REACHTIME).date();
  const Reachh = dayjs(REACHTIME).hour();
  const Reachmi = dayjs(REACHTIME).minute();
  const Reachs = dayjs(REACHTIME).second();

  //  console.log(ReachYear,Reachm,Reachd,Reachh,Reachmi,Reachs);

   const target:any = new Date(`${Reachm+1}/${Reachd}/${ReachYear} ${Reachh}:${Reachmi}:${Reachs}`)

  useEffect(() => {
    // const target = new Date("12/5/2023 21:50:00");

    if (isCounting && !isEnd && !isUp) {
      interval.current = setInterval(() => {
        const now: any = new Date();
        const difference = target.getTime() - now.getTime();
        
        console.log(now.getTime());
        

        const SECOND = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(SECOND);
        const MINUTE = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutes(MINUTE);
        const HOUR = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(HOUR);
        const DAY = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24)
        );
        setDays(DAY);
        const MONTH = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 31*12)) / (1000 * 60 * 60 * 24*31)
        );
        setMonths(MONTH);
        // const YEAR = Math.floor(
        //   (difference % (1000 * 60 * 60 * 24 * 31* 12 *100)) / (1000 * 60 * 60 * 24 * 31 * 12 )
        // );
        // setMonths(YEAR);

        if (MONTH <= 0 && DAY <= 0 && HOUR <= 0 && MINUTE <= 0 && SECOND <= 0) setIsEnd(true);
      }, 1000);

      if (isReset) {
        clearInterval(interval.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      }
      return () => clearInterval(interval.current);
    }
    if (isCounting && !isEnd && isUp) {
      downInterval.current = setInterval(() => {
        setTime((prev: number) => prev + 1);

        console.log(time);
        console.log(target/1000);
        
        const m = Math.floor((time % (60 * 60)) / 60);

        setMinutes(m);
        // // const s = Math.floor(time % (1000 * 60* 60) / (1000 * 60))
        const s = Math.floor(time % 60);
        setSeconds(s);

        const h = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        setHours(h);

        const d = Math.floor(time / (60 * 60 * 24));
        setDays(d);
      }, 1000);
      if (isReset) {
        clearInterval(downInterval.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      }
      return () => clearInterval(downInterval.current);
    }
    if (isReset) {
      clearInterval(downInterval.current);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
    }
    if (isReset) {
      clearInterval(interval.current);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
    }

    return () => {
      clearInterval(interval.current);
      clearInterval(downInterval.current);
    };
  }, [time, isCounting, isReset, isEnd, isUp]);

  return (
    <>
      <Box
        
       
        boxShadow={'0 0 20px 0 rgba(174,185,179,0.75)'}
        borderRadius={1}
        bgcolor={'rgba(0,0,0,.1)'}
        sx={{
          px: {sm:4, md: 5 },
          py:{xs:2,sm:3,},
          mt:{md:10},
          display: "flex",
        }}
      >
        {a.map((item, index) => (
          <Number date={item} isLast={index + 1 == a.length} />
        ))}
      </Box>
    </>
  );
}
