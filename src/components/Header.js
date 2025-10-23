import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaStethoscope size={30} color="#007bff"/>
        <h1>ChroniCare</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/chat">Chat</Link>
      </nav>
    </header>
  );
}

export default Header;
