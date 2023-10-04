import {useContext} from 'react'
import {TimerContext } from '../context/CounterContext'

export const useLoginContext = () => {
  return useContext(TimerContext)
}
