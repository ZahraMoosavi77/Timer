"use client"
import {useContext} from 'react'
import {TimerContext } from '../context/CounterContext'

export const useTimerContext = () => {
  return useContext(TimerContext)
}
