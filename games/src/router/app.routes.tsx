import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Edition } from "../pages/edition";
import { Home } from "../pages/home";
import { RegisterGame } from "../pages/register";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterGame />} />
        <Route path="/edition/:id" element={<Edition />} />
      </Routes>
    </BrowserRouter>
  );
};
