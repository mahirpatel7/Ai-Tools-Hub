// src/tools/utility/QRGeneratorTool.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Slider,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { Helmet } from "react-helmet-async";


const QRGeneratorTool = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = () => {
    if (!text.trim()) {
      setShowQR(false);
      return;
    }
    setShowQR(true);
  };

  const handleDownload = () => {
    const canvas = document.querySelector("#qr-code-canvas");
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Helmet>
        <title>Free QR Code Generator Online – Create QR Codes Instantly</title>
        <meta
          name="description"
          content="Generate QR codes online for URLs, text, WiFi and more. Free, fast and secure QR code generator with download support."
        />
      </Helmet>

      <Typography variant="h5" gutterBottom>
        QR Code Generator
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Enter any text or URL and generate a QR code. You can also download it
        as an image.
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
        <Stack spacing={3}>
          {/* Input text */}
          <TextField
            label="Text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            placeholder="https://example.com or any text"
          />

          {/* Size slider */}
          <Box>
            <Typography variant="body2" gutterBottom>
              Size: {size}px
            </Typography>
            <Slider
              min={100}
              max={400}
              value={size}
              onChange={(_, value) => setSize(value)}
              valueLabelDisplay="auto"
            />
          </Box>

          {/* Generate button */}
          <Button variant="contained" onClick={handleGenerate}>
            Generate QR Code
          </Button>

          {/* Preview + download */}
          {showQR && (
            <Stack spacing={2} alignItems="center">
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              >
                <QRCodeCanvas
                  id="qr-code-canvas"
                  value={text}
                  size={size}
                  includeMargin={true}
                />
              </Box>
              <Button variant="outlined" onClick={handleDownload}>
                Download PNG
              </Button>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default QRGeneratorTool;
