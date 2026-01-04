import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddContact } from "./pages/AddContact"; // Cámbiale el nombre a Demo.jsx si prefieres
import { Layout } from "./pages/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<AddContact />} />
        <Route path="edit/:id" element={<AddContact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;