// src/layouts/AppLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const NAVBAR_HEIGHT = 56;

const AppLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Layout below navbar */}
      <Box
        sx={{
          display: "flex",
          height: `calc(100vh)`,
          pt: `${NAVBAR_HEIGHT}px`, // 🔑 OFFSET FOR FIXED NAVBAR
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: 260,
            borderRight: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
