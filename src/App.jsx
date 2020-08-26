import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import MainTheme from "./theme";

import AppLayout from "./AppLayout";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";

function App() {
  //State for Open/Close Navigation
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <div className="App">
        <Header open={open} setOpen={setOpen} />
        <AppLayout>
          <LeftPanel open={open} setOpen={setOpen} />
        </AppLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
