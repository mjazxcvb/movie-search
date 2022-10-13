import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
        primary: {
            light: '#1C6758',
            main: '#1C6758',
            dark: '#1C6758',
        },
        secondary: {
            light: '#D6CDA4',
            main: '#D6CDA4',
            dark: '#D6CDA4',
        },
        text: {
            secondary: '#FFFFFF',
            primary: '#000000',
        },
   },
   typography: {
    fontFamily: 'monospace, Roboto',
   }
  });

  export default theme;