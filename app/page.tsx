"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect} from 'react'

export default function Home() {
  
  const [isCountUp, setISCountUP] = useState(false)
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(()=>{
    const target = new Date("10/2/2023 11:6:00")
    const interval = setInterval(()=>{
    const now = new Date();
    const difference = target.getTime() -  now.getTime()

    const d = Math.floor(difference / (1000 * 60* 60* 24))
    setDays(d)

    const h = Math.floor(difference % (1000 * 60* 60* 24) / (1000 * 60* 60))
    setHours(h)

    const m = Math.floor(difference % (1000 * 60* 60) / (1000 * 60))
    setMinutes(m)

    const s= Math.floor(difference % (1000 * 60) / (1000))
    setSeconds(s)

    if(d <= 0 && h <= 0 && m<=0 && s<=m){

      setPartyTime(true)
      
    }
    },1000)

   

    return () => clearInterval(interval)

  },[])

  return (
   <>
   {partyTime ?( <p> it is time</p> ):(
      <div className='timer__wrapper'>
        {days}{hours}{minutes}{seconds}
      </div>)
}
   </>
  )
}
