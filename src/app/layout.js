"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./globals.css"; // Keep this for Tailwind or custom styles

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Customize as needed
    secondary: { main: "#dc004e" },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Normalizes CSS */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
