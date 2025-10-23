import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ChroniCare</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/ChatPage">Chat</Link>

      </div>
    </nav>
  );
}

export default Navbar;
