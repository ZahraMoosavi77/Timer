import { Container, Grid, ToggleButton, Typography, Box } from "@mui/material";
import React, { PureComponent } from "react";
import ToggleButtons from "./components/ToggleButtons";
import BasicDateTimePicker from "./components/BasicDateTimePicker";
import Button from "./components/Button";

export default function page() {
  return (


    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={10}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        bgcolor={"white"}
        sx={{flexDirection:{sm:"row"}}}
       
      >
        <Grid item xs={12} sm={6} md={5} >
          <BasicDateTimePicker />
        </Grid>
        
        <Grid item xs={12} sm={2} md={2}  >
          <ToggleButtons />
        </Grid>
      </Grid>

      <Grid item>
        <Button />
      </Grid>
    </Grid>
    // </Container>
  );
}
