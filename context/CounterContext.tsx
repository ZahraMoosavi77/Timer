"use client";

import React, { useState, createContext } from "react";
import dayjs, { Dayjs } from "dayjs";

interface TimerProviderProps {
  children: React.ReactNode;
}

type WatchContextType = {
  id: number;
  name: string;
  value: number;
}[];

export const Watch = createContext<WatchContextType>([
  { id: 1, name: "Year", value: 0 },
  { id: 2, name: "Minutes", value: 0 },
  { id: 3, name: "Seconds", value: 0 },
]);

export const watchAction = createContext<
  React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        value: number;
      }[]
    >
  >
>(() => {});

export const TimerContext = createContext({
  isCounting: false,
  setIsCounting: (isCounting: boolean) => {},

  isEnd: false,
  setIsEnd: (isEnd: boolean) => {},
  isReset: false,
  setIsReset: (isReset: boolean) => {},
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
  value: dayjs(new Date()),
  setValue: (value: any) => {},
  isUp: false,
  setIsUp: (isUp: boolean) => {},
  direction: "down",
  setDirection: (direction: any) => {},
  isWrongTarget: false,
  setIsWrongTarget: (isWrongTarget: boolean) => {},
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
  const [isUp, setIsUp] = useState(false);
  const [isWrongTarget, setIsWrongTarget] = useState(false);
  const [direction, setDirection] = useState("down");
  const [test, setTest] = useState([
    { id: 1, name: "Year", value: 0 },
    { id: 2, name: "Minutes", value: 0 },
    { id: 3, name: "Seconds", value: 0 },
  ]);

  return (
    <TimerContext.Provider
      value={{
        isWrongTarget,
        setIsWrongTarget,
        isCounting,
        setIsCounting,
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
        direction,
        setDirection,
      }}
    >
      <watchAction.Provider value={setTest}>
        <Watch.Provider value={test}>{children}</Watch.Provider>
      </watchAction.Provider>
    </TimerContext.Provider>
  );
};
