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
import axios from "axios";
import { Helmet } from "react-helmet-async";


const URLShortenerTool = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setError("Please enter a URL");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setShortUrl("");
      setCopied(false);

      // ✅ STILL THE SAME – just calls our Netlify function
      const response = await axios.post("/.netlify/functions/shorten-url", {
        longUrl,
      });

      const { shortUrl } = response.data;
      setShortUrl(shortUrl);
    } catch (err) {
      console.error(err);
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shortUrl) return;
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
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
      </Paper>
    </Box>
  );
};

export default URLShortenerTool;
