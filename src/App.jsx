import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import MainTheme from "./theme";

import AppLayout from "./AppLayout";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <AppLayout>
          <LeftPanel />
        </AppLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
