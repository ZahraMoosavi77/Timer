"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Number from "./Number";

export default function Numbers() {
  const a = ["year", "month", "day", "hour", "minute", "second"];
  return (
    <>
      <Box
        
        border={1}
        borderColor={"#fff"}
        borderRadius={1}
        sx={{
          p: { xs: 0, md: 5 },
          display: { xs: "flex", sm: "flex" },
        }}
      >
        {a.map((item, index) => (
          <Number date={item} isLast={index + 1 == a.length} />
        ))}
      </Box>

    </>
  );
}
