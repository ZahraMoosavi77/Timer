'use client'

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {useTimerContext} from "../../hooks/useTimerContext"

export default function DateTimePickerValue() {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-05-10T15:30'));
  const {value, setValue} = useTimerContext()


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']} sx={{py:'0',borderRadius:'4px', border:'none', outline:'none'}}>
        <DateTimePicker
          
          value={value}
          onChange={(newValue) => setValue(newValue)}
          autoFocus={false}
          disablePast={true}
          sx={{color:'red', width:'100px', bgcolor:'white',borderRadius:'4px', border:'none', outline:'none'
         
          }}
          
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
