// src/tools/utility/URLShortenerTool.jsx
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
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";


const URLShortenerTool = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setError("Please enter a URL");

      if (window.gtag) {
        window.gtag("event", "error_shown", {
          tool_name: "URL Shortener",
          error_type: "empty_url",
        });
      }
      return;
    }

    try {
      // existing logic…

      setShortUrl(shortUrl);

      // ✅ tool used
      if (window.gtag) {
        window.gtag("event", "tool_used", {
          tool_name: "URL Shortener",
          action: "shorten_url",
        });
      }
    } catch {
      // existing error logic…

      if (window.gtag) {
        window.gtag("event", "error_shown", {
          tool_name: "URL Shortener",
          error_type: "api_failure",
        });
      }
    }
  };


  const handleCopy = async () => {
    if (!shortUrl) return;

    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // ✅ copy event
    if (window.gtag) {
      window.gtag("event", "copy_clicked", {
        tool_name: "URL Shortener",
      });
    }
  };


  return (
    <Box>
      <Helmet>
        <title>Free URL Shortener – Shorten Long Links Instantly</title>
        <meta
          name="description"
          content="Shorten long URLs instantly using our free URL shortener. Simple, fast and secure link shortening tool."
        />
      </Helmet>

      <Typography variant="h5" gutterBottom>
        URL Shortener
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Shorten long URLs using the free Ulvis URL Shortener API via a serverless function.
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
          <TextField
            label="Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            fullWidth
            placeholder="https://example.com/very-long/url"
          />

          <Button
            variant="contained"
            onClick={handleShorten}
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </Button>

          {error && (
            <Alert severity="error" onClose={() => setError("")}>
              {error}
            </Alert>
          )}

          {shortUrl && (
            <Stack spacing={1}>
              <Typography variant="subtitle2">Short URL</Typography>
              <TextField
                value={shortUrl}
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
                <Typography variant="caption" color="success.main">
                  Copied!
                </Typography>
              )}
            </Stack>
          )}
        </Stack>
      </Paper> <Box
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

export default URLShortenerTool;
