import React, { useState, createContext } from "react";

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
  years: 0,
  setYears: (years: number) => {},
  mounths: 0,
  setMounths: (mounth: number) => {},
  days: 0,
  setDays: (days: number) => {},
  hours: 0,
  setHours: (hours: number) => {},
  minutes: 0,
  setMinutes: (minutes: number) => {},
  seconds: 0,
  setSeconds: (seconds: number) => {},
  time: 0,
  setTime: (time: number) => {},
});

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [isCounting, setIsCounting] = useState(false);
  const [isCountUp, setIsCountUP] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [years, setYears] = useState(0);
  const [mounths, setMounths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <TimerContext.Provider
      value={{
        isCounting,
        setIsCounting,
        isCountUp,
        setIsCountUP,
        isEnd,
        setIsEnd,
        years,
        setYears,
        mounths,
        setMounths,
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
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
