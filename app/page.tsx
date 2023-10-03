
import { Container, Grid, ToggleButton, Typography } from "@mui/material";
import React, { PureComponent } from "react";
import ToggleButtons from "./components/ToggleButtons";
import BasicDateTimePicker from "./components/BasicDateTimePicker"


export default function page() {
  return (
    <Grid container>
        <Grid item xs={6} sx={{margin: '50px'}}>
          <ToggleButtons/>
          <Typography sx={{color : 'white'}}>
            hello
          </Typography>
          <BasicDateTimePicker/>
        </Grid>
      </Grid>
  )
}
