"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
type NumberType = { date: string; isLast: boolean };
export default function number({ date, isLast }: NumberType) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    //   alignItems={"flex-start"}
      sx={{alignItems:{xs:'center', sm:'flex-start'}}}
    >
      <Typography
        // variant="h3"
        component="p"
        sx={{ color: "#fff" , gap:{md:3,xs:1}, fontFamily:{xs:'20px', md:'30px'}}}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      
      >
        00{isLast ? "" : <Box component="span">:</Box>}
      </Typography>

      <Typography variant="body1"  component="p" p={1} sx={{ color: "#fff", }}>
        {date}
      </Typography>
    </Box>
  );
}
