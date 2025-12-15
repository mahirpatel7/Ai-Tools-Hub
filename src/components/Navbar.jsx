// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Simple top navbar for AI Tools Hub.
 * Currently static (no sidebar toggle logic) to avoid changing any existing logic.
 * You can later pass props for drawer toggle if needed.
 */
const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      color="default"
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ minHeight: 56 }}>
        {/* (Optional) Menu icon – purely visual for now */}
        <IconButton
          edge="start"
          size="small"
          sx={{ mr: 1, display: { xs: "inline-flex", md: "none" } }}
          disabled
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        {/* Brand / title */}
        <Typography
          variant="h6"
          noWrap
          sx={{ fontWeight: 700, fontSize: 18 }}
          component={RouterLink}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          AI Tools Hub
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Simple "Home" button on the right */}
        <Button
          component={RouterLink}
          to="/"
          size="small"
          variant="outlined"
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
