import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-light bg-light mb-3 p-3">
    <Link to="/" className="navbar-brand mb-0 h1">Contact List</Link>
    <Link to="/add">
      <button className="btn btn-success">Add new contact</button>
    </Link>
  </nav>
);