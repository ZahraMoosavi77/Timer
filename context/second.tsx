"use client";

import React, { useState, createContext } from "react";
import dayjs, { Dayjs } from "dayjs";

interface TimerProviderProps {
  children: React.ReactNode;
}

export const TimePickerAction = createContext<
  React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
>(() => {});
export const TimePicker = createContext<dayjs.Dayjs>(dayjs("2023-05-10T15:30"));

export const CountingAction = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
export const Counting = createContext<boolean>(false);

export const EndAction = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
export const End = createContext<boolean>(false);

export const ResetAction = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
export const Reset = createContext<boolean>(false);

export const UpAction = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});
export const Up = createContext<boolean>(false);

export const TimerContext = createContext({
  
  
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

 
  direction: "down",
  setDirection: (direction: any) => {},
});

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [isCounting, setIsCounting] = useState(false);

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
  const [direction, setDirection] = useState("down");

  return (
    <TimerContext.Provider
      value={{
        
       
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

        
        direction,
        setDirection,
      }}
    >
      <TimePicker.Provider value={value}>
        <TimePickerAction.Provider value={setValue}>
          <Counting.Provider value={isCounting}>
            <CountingAction.Provider value={setIsCounting}>
              <End.Provider value={isEnd}>
                <EndAction.Provider value={setIsEnd}>
                    <Reset.Provider value={isReset}>
                        <ResetAction.Provider value={setIsReset}>
                            
                            <Up.Provider value={isUp}>
                                <UpAction.Provider value={setIsUp}>
                                {children}
                                </UpAction.Provider>
                            </Up.Provider>
                      
                        </ResetAction.Provider>
                    </Reset.Provider>
                  
                </EndAction.Provider>
              </End.Provider>
            </CountingAction.Provider>
          </Counting.Provider>
          {/* <Soheil.Provider value={value}>
          
          </Soheil.Provider> */}
        </TimePickerAction.Provider>
      </TimePicker.Provider>
    </TimerContext.Provider>
  );
};
