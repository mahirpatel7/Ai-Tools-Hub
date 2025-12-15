// src/contexts/ThemeModeContext.jsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";

const ThemeModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // default = light

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return ctx;
};
