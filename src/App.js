import "modern-normalize";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Player from "./components/Player/Player";
import * as darkTheme from "./utils/darkTheme";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Player />
    </ThemeProvider>
  );
};

export default App;
