import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
