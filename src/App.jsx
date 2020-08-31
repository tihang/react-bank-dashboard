import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { MainTheme, DarkTheme } from "./theme";

import AppLayout from "./AppLayout";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";

function App() {
  //State for Open/Close Navigation
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : MainTheme}>
      <GlobalStyle />
      <div className="App">
        <Header
          open={open}
          setOpen={setOpen}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <AppLayout>
          <LeftPanel open={open} setOpen={setOpen} />
        </AppLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
