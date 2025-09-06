import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LaptopPage from "../pages/LaptopPage";
import LaptopDetailPage from "../pages/LaptopDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/laptops" element={<LaptopPage />} />
      <Route path="/laptops/:id" element={<LaptopDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
