"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import {useTimerContext} from "../../hooks/useTimerContext"
type NumberType = { date: {name:string, value:number}; isLast: boolean };
export default function number({ date, isLast }: NumberType) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      // alignItems={"flex-start"}
      sx={{alignItems:{xs:'center', }, width:{xs:'55px',sm:'80px'}, textAlign:'center'}}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ color: "#fff" , gap:{md:3,xs:1,sm:2}, fontSize:{xs:'20px', sm:'30px'}}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      
      >
        {date.value}{isLast ? "" : <Box component="span">:</Box>}
      </Typography>

      <Typography variant="body1"  component="p" p={1} sx={{ color: "#fff",fontSize:{xs:'12px', sm:'20px'},pt:{xs:"12px",sm:"20px"} }}>
        {date.name}
      </Typography>
    </Box>
  );
}
