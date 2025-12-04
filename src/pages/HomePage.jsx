import { Box, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        AI Tools Hub
      </Typography>
      <Typography variant="body1" gutterBottom>
        Central place for free developer, productivity & AI utilities.
      </Typography>
      <Button variant="contained">
        Get Started
      </Button>
    </Box>
  );
};

export default HomePage;
