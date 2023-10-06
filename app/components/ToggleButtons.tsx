"use client";
import { useState } from "react";
// import ToggleButton from "@mui/material/ToggleButton";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Typography } from "@mui/material";
import {useTimerContext} from "../../hooks/useTimerContext"
import { styled } from "@mui/material/styles";


const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#ECCFD1',
    
  }
});
export default function ToggleButtons() {
  const [direction, setDirection] = useState<string | null>("down");
  
  const {isUp, setIsUp, setTime}=  useTimerContext()
  const handleDirection = (
    event: React.MouseEvent<HTMLElement>,
    newDirection: string | null
  ) => {
    setDirection(newDirection);
  };

  const handleUp = ()=>{
    setIsUp(true);
    setTime(0);
  };
  const handleDown = ()=>{
    setIsUp(false);
    setTime(0);
  };

  return (
    <ToggleButtonGroup
      value={direction}
      exclusive
      onChange={handleDirection}
      aria-label="timer"
      size="large" ///change mobile
      color="primary"
      sx={{ backgroundColor: "white",  overflow:"hidden",borderRadius:{xs:'80px',sm:'4px'}}}
    >
      <ToggleButton
        value="up"
        aria-label="increasment"
        color="primary"
        
        
        sx={{ display: "flex", alignItems: "center", gap: "5px",overflow:"hidden"   }}
        onClick={handleUp}
      >
        <Typography variant="body1" component="p" sx={{ color: "black" , display:{xs:'none', sm:'block'}  }}>
          Increase
        </Typography>
        <KeyboardDoubleArrowUpIcon sx={{ color: "black" }} />
      </ToggleButton>
      <ToggleButton
        value="down"
        aria-label="decreasment"
        sx={{ display: "flex", alignItems: "center", gap: "5px"}}
        onClick={handleDown}
      >
        <KeyboardDoubleArrowDownIcon sx={{ color: "black" }} />
        <Typography variant="body1" component="p" sx={{ color: "black",display:{xs:'none',sm:'block'} }}>
          Decrease
        </Typography>
        
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
