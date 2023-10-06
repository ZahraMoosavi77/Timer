"use client"

import React, { useState, createContext } from "react";
import dayjs, { Dayjs } from 'dayjs';

interface TimerProviderProps {
  children: React.ReactNode;
}

export const TimerContext = createContext({
  isCounting: false,
  setIsCounting: (isCounting: boolean) => {},
  isCountUp: false,
  setIsCountUP: (isCountUp: boolean) => {},
  isEnd: false,
  setIsEnd: (isCountUp: boolean) => {},
  isReset: false,
  setIsReset: (isCountUp: boolean) => {},
  years: 0,
  setYears: (years: number) => {},
  months: 0,
  setMonths: (mounth: number) => {},
  days: 0,
  setDays: (days: number) => {},
  hours: 0,
  setHours: (hours: number) => {},
  minutes: 0,
  setMinutes: (minutes: number) => {},
  seconds: 0,
  setSeconds: (seconds: number) => {},
  time: 0,
  setTime: (time: any) => {},
  value:dayjs(new Date()),
  setValue:(value:any)=>{},
  isUp:false,
  setIsUp:(value:boolean) =>{}
  
});

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [isCounting, setIsCounting] = useState(false);
  const [isCountUp, setIsCountUP] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [value, setValue] = useState(dayjs(new Date()));
  const [isUp,setIsUp] = useState(false);
  

  return (
    <TimerContext.Provider
      value={{
        isCounting,
        setIsCounting,
        isCountUp,
        setIsCountUP,
        isEnd,
        setIsEnd,
        isReset,
        setIsReset,
        years,
        setYears,
        months,
        setMonths,
        days,
        setDays,
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        time,
        setTime,
        value,
        setValue,
        isUp,
        setIsUp,
        
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
