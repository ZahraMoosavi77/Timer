'use client'

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import  { useState,useContext} from "react";
import {memo} from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {useTimerContext} from "../../hooks/useTimerContext"
import { TimePicker, TimePickerAction } from '@/context/second';

export default function DateTimePickerValue() {
  const [v, setV] = useState(0);

  // const value = useContext(TimePicker)


  // const setValue = useContext(TimePickerAction)
 
  


  const {value, setValue} = useTimerContext()


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']} sx={{py:'0',borderRadius:'4px', border:'none', outline:'none'}}>
        <DateTimePicker
          
          value={value}
          onChange={(newValue) => newValue!==null && setValue(newValue)}
          autoFocus={false}
          disablePast={true}
          sx={{color:'red', width:'100px', bgcolor:'white',borderRadius:'4px', border:'none', outline:'none'
         
          }}
          
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


