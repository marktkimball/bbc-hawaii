import React from "react";
import { Link } from "gatsby";
import Logo from "../img/logo-only.png";
import "./navbar.scss";

const Navbar = () => (
  <nav className="depth-3 menu-container">
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
    <Link to="/" className="menu-logo" title="Bible Baptist Church">
      <img alt="Bible Baptist Church Logo" src={Logo} />
    </Link>

    <div className="menu">
      <ul>
        <li>
          <Link to="/im-new">I'm New</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/beliefs">Our Beliefs</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
      {/* <ul>
        <li className="nav-item-cta-container">
          <Link className="nav-item-cta" to="/give">
            Giving
          </Link>
        </li>
      </ul> */}
    </div>
  </nav>
);

export default Navbar;
