import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Auth.css";

function Signup() {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>Create a ChroniCare Account</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
