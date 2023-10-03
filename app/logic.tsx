"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isCountUp, setISCountUP] = useState(false);
  const [partyTime, setPartyTime] = useState(false);
  const [years,setYears] = useState(0)
  const [mounths, setMounths] = useState(0)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const target = new Date("12/4/2023 15:20:00");

    if (!isCountUp) {
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const y = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)); 
        setYears(y)

        const mo = Math.floor(difference / (1000 * 60 * 60 * 24 * 31)); 
        setMounths(mo)
        const d = Math.floor(difference % (1000 * 60 * 60 * 24 * 31) / (1000 * 60 * 60 * 24 ));
        setDays(d);

        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);

        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
          setPartyTime(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);

      console.log(time);
      const m = Math.floor((time % (60 * 60)) / 60);
      console.log("m", m);

      setMinutes(m);
      // const s = Math.floor(time % (1000 * 60* 60) / (1000 * 60))
      const s = Math.floor(time % 60);
      setSeconds(s);
      console.log("s", s);

      const h = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
      setHours(h);

      const d = Math.floor(time / (60 * 60 * 24));
      setDays(d);
      console.log("d", d);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      {partyTime ? (
        <p> it is time</p>
      ) : (
        <div className="timer__wrapper">
          <div>
            years
            {years}
          </div>

          <div>
            mounth
            {mounths}
          </div>
          <div>
            days
            {days}
          </div>
          <div>
            hours
            {hours}
          </div>
          <div>
            minutes
            {minutes}

          </div>
          <div>
            second
            {seconds}
          </div>
         
        </div>
      )}
    </>
  );
}
