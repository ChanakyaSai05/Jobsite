import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="image-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 style={{ color: "black" }}>Job Site</h2>
          </Link>
        </div>
        <div className="bottom-right">
          <div>
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
