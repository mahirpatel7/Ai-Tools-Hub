// src/layouts/AppLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // navbar on top, rest below
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Space under fixed AppBar (so content doesn't go under navbar) */}
      <Toolbar sx={{ minHeight: 56 }} />

      {/* Main area: sidebar + page content */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        {/* Left sidebar */}
        <Sidebar />

        {/* Main routed content */}
        <Box
          component="main"
          sx={{
            flex: 1,
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

