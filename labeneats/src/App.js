import { Container, GlobalStyle } from "./components/GlobalStyled";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import GlobalState from "./GlobalStates/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Container>
          <GlobalStyle />
          <Router />
        </Container>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
