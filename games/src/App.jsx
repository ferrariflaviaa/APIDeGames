import React from "react";
import { Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// import { Header } from "./components/header";
import { Footer } from "./pages/footer";
import { AppRoutes } from "./router/app.routes";
import { GlobalStyles } from "./styles/globalStyles";
import themes from "./themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        {/* <Header /> */}
        <GlobalStyles />
        <AppRoutes />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
