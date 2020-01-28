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
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/infos" className="nav-link" href="#">
              All Infos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="#">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
