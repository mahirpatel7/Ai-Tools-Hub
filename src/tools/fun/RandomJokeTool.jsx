// src/tools/fun/RandomJokeTool.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import { Helmet } from "react-helmet-async";


const JOKES = [
  {
    setup: "Why do JavaScript developers wear glasses?",
    punchline: "Because they don’t C#.",
  },
  {
    setup: "Why did the React component break up with the state?",
    punchline: "It found someone more stable.",
  },
  {
    setup: "Why was the developer unhappy at their job?",
    punchline: "They wanted arrays.",
  },
  {
    setup: "Why did the function return early?",
    punchline: "It had a date.",
  },
];



const RandomJokeTool = () => {
  const [joke, setJoke] = useState(null);

  const handleNewJoke = () => {
    const index = Math.floor(Math.random() * JOKES.length);
    setJoke(JOKES[index]);

    // ✅ STEP 9.5 — track action
    if (window.gtag) {
      window.gtag("event", "tool_used", {
        tool_name: "Random Joke",
        action: "generate_joke",
      });
    }
  };

  return (
    <Box>
      <Helmet>
        <title>Random Programming Joke Generator – Fun Developer Jokes</title>
        <meta
          name="description"
          content="Enjoy random programming jokes for developers. Lighten your mood with fun coding jokes instantly."
        />
      </Helmet>

      <Typography variant="h5" gutterBottom>
        Random Joke
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Click the button to see a random programming joke.
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
          <Button variant="contained" onClick={handleNewJoke}>
            Tell me a joke
          </Button>

          {joke && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle1" gutterBottom>
                {joke.setup}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {joke.punchline}
              </Typography>
            </Box>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default RandomJokeTool;
