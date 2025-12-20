// src/components/Navbar.jsx
import React from "react";
import { Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Simple top navbar for AI Tools Hub.
 * Logic untouched. Only visual + spacing fixes.
 */
const Navbar = () => {
  return (
    <Box
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar + 100, // ✅ same as AppBar
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",

        // ✅ AppBar-like shadow
        // boxShadow:
        //   "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 56,
          px: 2,          // ✅ horizontal spacing
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Menu icon (visual only) */}
        <IconButton
          edge="start"
          size="small"
          sx={{ mr: 1, display: { xs: "inline-flex", md: "none" } }}
          disabled
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        {/* Brand */}
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

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Home button */}
        <Button
          component={RouterLink}
          to="/"
          size="small"
          variant="outlined"
        >
          Home
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
