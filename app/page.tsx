import { Grid} from "@mui/material";
import ToggleButtons from "./components/ToggleButtons";
import BasicDateTimePicker from "./components/BasicDateTimePicker";
import Button from "./components/Button";
import Numbers from "./components/Numbers";

export default function page() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      
      gap={4}
      sx={{mt:{xs:2,sm:10}}}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        
        sx={{ flexDirection: { sm: "row" } }}
      >
        <Grid item xs={2} sm={6} md={4}>
          <BasicDateTimePicker />
        </Grid>

        <Grid item xs={2} sm={2} md={2}>
          <ToggleButtons />
        </Grid>
      </Grid>

      <Grid item mt={20} xs={12} >
        <Numbers  />
      </Grid>

      <Grid item>
        <Button />
      </Grid>
    </Grid>
    
  );
}
