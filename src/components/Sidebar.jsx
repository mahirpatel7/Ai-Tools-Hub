// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Box, List, ListSubheader, ListItemButton, ListItemText, Typography, Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <Box component="aside" sx={{ width: 260, borderRight: "1px solid", borderColor: "divider", p: 2, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 2, }} >
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          AI Tools Hub
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Free utilities & AI helpers
        </Typography>
      </Box>

      <Divider />

      {/* Scrollable area with categories */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {/* === Utility Section === */}
        <List
          dense
          subheader={
            <ListSubheader component="div" disableSticky sx={{ bgcolor: "transparent", px: 0, py: 1, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, color: "text.secondary", }} >
              Utility
            </ListSubheader>
          }
          sx={{ mb: 1, px: 0 }}
        >
          <ListItemButton component={NavLink} to="/main/QRGenerator" sx={{
            borderRadius: 1, mb: 0.5, px: 1.5,
            "&.active": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            },
          }}
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: 14 }}
              primary="QR Code Generator"
            />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/main/UUIDGenerator" sx={{
            borderRadius: 1, mb: 0.5, px: 1.5,
            "&.active": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            },
          }}
          >
            <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary="UUID Generator" />
          </ListItemButton>

          <ListItemButton component={NavLink} to="/main/URLShortener" sx={{
            borderRadius: 1, mb: 0.5, px: 1.5,
            "&.active": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            },
          }}
          >
            <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary="Url Shortner" />
          </ListItemButton>
        </List>

        {/* === Fun & Content Section === */}
        <List
          dense
          subheader={
            <ListSubheader component="div" disableSticky sx={{ bgcolor: "transparent", px: 0, py: 1, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, color: "text.secondary", }} >
              Fun & Content
            </ListSubheader>
          }
          sx={{ mb: 1, px: 0 }}
        >
          <ListItemButton component={NavLink} to="/main/RandomJoke" sx={{
            borderRadius: 1, mb: 0.5, px: 1.5,
            "&.active": {
              bgcolor: "primary.main", color: "primary.contrastText",
              "& .MuiListItemText-primary": {
                fontWeight: 600,
              },
            },
          }}
          >
            <ListItemText primaryTypographyProps={{ fontSize: 14 }} primary="Random Joke" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
