import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h2>Login to ChroniCare</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
