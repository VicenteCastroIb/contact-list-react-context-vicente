import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet /> {/* Aquí se renderizan Home o AddContact */}
    </div>
  );
};