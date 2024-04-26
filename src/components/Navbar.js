import React from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

function Navbar() {
  const style = {
    padding: '1% 10%'
  }
  return (
    <div>
      <nav style={style} class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link href="/" className="logo">
            OnlineFoodOrder
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex justify-content-around" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/login" className="link user-login">User</Link>
              </li>
              <li class="nav-item">
                <Link to="/adminlogin" className="admin-link">
                  Admin Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/sellerlogin" className="seller-link">
                  Seller Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <div></div>
      </nav>
    </div>
  );
}

export default Navbar;
