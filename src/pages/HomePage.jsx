import React from "react";
import { Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <Box>
      <Helmet>
        <title>AI Tools Hub – Free Online Tools for Developers, Designers & Students</title>
        <meta
          name="description"
          content="AI Tools Hub offers free online tools like QR Generator, UUID Generator, URL Shortener, Image Tools and more. Fast, secure and easy to use."
        />
      </Helmet>

      <Typography variant="h4" gutterBottom>
        Welcome to AI Tools Hub
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Select a tool from the sidebar to get started.
      </Typography>
    </Box>
  );
};

export default HomePage;
