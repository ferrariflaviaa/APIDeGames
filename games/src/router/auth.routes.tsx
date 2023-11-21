import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from "../components/header";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
