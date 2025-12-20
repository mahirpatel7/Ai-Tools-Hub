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
import Footer from "../../components/Footer";


const QRGeneratorTool = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [showQR, setShowQR] = useState(false);

  const handleDownload = () => {
    const canvas = document.querySelector("#qr-code-canvas");
    if (!canvas) return;

    // ✅ download event
    if (window.gtag) {
      window.gtag("event", "download_clicked", {
        tool_name: "QR Generator",
        file_type: "png",
      });
    }
  };


  const handleGenerate = () => {
    if (!text.trim()) {
      setShowQR(false);

      // ✅ error event
      if (window.gtag) {
        window.gtag("event", "error_shown", {
          tool_name: "QR Generator",
          error_type: "empty_input",
        });
      }
      return;
    }

    setShowQR(true);

    // ✅ tool used event
    if (window.gtag) {
      window.gtag("event", "tool_used", {
        tool_name: "QR Generator",
        action: "generate_qr",
      });
    }
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
      <Box
        sx={{
          mt: 6,
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default QRGeneratorTool;
