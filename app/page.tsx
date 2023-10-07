import { Grid } from "@mui/material";
import ToggleButtons from "./components/ToggleButtons";
import BasicDateTimePicker from "./components/BasicDateTimePicker";
import Button from "./components/ActionButtons";
import Numbers from "./components/TimerPanel";
import { TimerProvider } from "../context/CounterContext";

export default function page() {
  return (
    <TimerProvider>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        sx={{ mt: { xs: 8, sm: 10 } }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ flexDirection: { sm: "row" }, gap: { xs: 2, sm: 0 } }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <BasicDateTimePicker />
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <ToggleButtons />
          </Grid>
        </Grid>

        <Grid item mt={20} xs={12}>
          <Numbers />
        </Grid>

        <Grid item>
          <Button />
        </Grid>
      </Grid>
    </TimerProvider>
  );
}
