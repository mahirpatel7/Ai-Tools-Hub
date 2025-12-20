// src/components/LegalLinks.jsx
import React from "react";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                fontSize: 14,
            }}
        >
            <Link component={RouterLink} to="/privacy-policy" underline="hover">
                Privacy Policy
            </Link>

            <Link component={RouterLink} to="/terms-of-service" underline="hover">
                Terms of Service
            </Link>

            <Link component={RouterLink} to="/contact" underline="hover">
                Contact
            </Link>
        </Box>
    );
};

export default Footer;
