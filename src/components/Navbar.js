import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="nav-link navbar-brand" href="#">
          Navbar
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03"></div>
        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
          <Link to="/" className="nav-item nav-link text-light">
            Home
          </Link>

          <Link to="/infos" className="nav-item nav-link text-light">
            All Infos
          </Link>

          <Link to="/about" className="nav-item nav-link text-light">
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
