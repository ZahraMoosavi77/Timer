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
        direction="row"
        justifyContent="center"
        alignItems="center"
       
      >
        <Grid item xs={2} >
          <ToggleButtons />
        </Grid>
        <Grid item>
          <BasicDateTimePicker />
        </Grid>
      </Grid>

      <Grid item>
        <Button />
      </Grid>
    </Grid>
    // </Container>
  );
}
