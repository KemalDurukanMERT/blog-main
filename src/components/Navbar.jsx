import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logo">ENSEEDLING</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <div className="navx">BLOG</div>
              </li>
              <li className="nav-item">
                <div className="navx">ABOUT ME</div>
              </li>
              <li className="nav-item">
                <div className="navx">CONTACT</div>
              </li>
              <li className="nav-item">
                <div className="navy">Add Blog</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
