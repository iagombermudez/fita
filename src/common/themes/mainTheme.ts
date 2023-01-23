import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#39ff13",
    },
  },
  typography: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        },
      },
    },
  },
});
