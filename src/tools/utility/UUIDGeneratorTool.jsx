// src/tools/utility/UUIDGeneratorTool.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet-async";


const UUIDGeneratorTool = () => {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!uuid) return;

    await navigator.clipboard.writeText(uuid);
    setCopied(true);

    // ✅ copy event
    if (window.gtag) {
      window.gtag("event", "copy_clicked", {
        tool_name: "UUID Generator",
      });
    }
  };


  const handleGenerate = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    setCopied(false);

    // ✅ tool used
    if (window.gtag) {
      window.gtag("event", "tool_used", {
        tool_name: "UUID Generator",
        action: "generate_uuid",
      });
    }
  };


  return (
    <Box>
      <Helmet>
        <title>UUID Generator Online – Generate Unique IDs Instantly</title>
        <meta
          name="description"
          content="Generate UUID v4 online instantly. Free UUID generator for developers to create unique identifiers securely."
        />
      </Helmet>

      <Typography variant="h5" gutterBottom>
        UUID Generator
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Generate random UUID v4 values and quickly copy them for use in your
        apps.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={2}>
          <Button variant="contained" onClick={handleGenerate}>
            Generate UUID
          </Button>

          <TextField
            label="Generated UUID"
            value={uuid}
            fullWidth
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopy} edge="end">
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {copied && (
            <Alert severity="success" sx={{ mt: 1, py: 0.5 }}>
              UUID copied to clipboard!
            </Alert>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default UUIDGeneratorTool;
