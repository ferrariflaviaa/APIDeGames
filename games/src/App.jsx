import React from "react";
import { ThemeProvider } from "styled-components";

import { UserProvider } from "./context/userContext";
import { Footer } from "./pages/footer";
import { Routes } from "./router/index";
import { GlobalStyles } from "./styles/globalStyles";
import themes from "./themes";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <Routes />
        <Footer />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
