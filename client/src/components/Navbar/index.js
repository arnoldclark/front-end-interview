import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <header className="ch-navbar">
    <div className="ch-container">
      <div className="ch-row">
        <div className="xs:ch-col--12 sm:ch-col--3">
          <Link to="/" className="ch-navbar__title">
            Arnold Clark Garage
          </Link>
        </div>
        <div className="xs:ch-col--12 sm:ch-col--9">
          <ul className="ch-navbar__nav" data-id="ch-navbar-menu">
            <li>
              <Link to="/branches">Branch List</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);
