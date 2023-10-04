import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Timer10Icon from "@mui/icons-material/Timer10";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";

import Typography from "@mui/material/Typography";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}> 
            <Toolbar sx={{ backgroundColor: "white" }}>
              <AccessTimeFilledIcon
                sx={{ color: "black", mr: "8px" }}
              ></AccessTimeFilledIcon>
              <Typography variant="h6" noWrap component="div" color="black">
                Timer App
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
