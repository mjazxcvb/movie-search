import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import "./App.css";
import Navigator from "./components/Navigator";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
