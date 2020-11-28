import React from "react";
import { Link } from "gatsby";
import logo from "../img/bbc-logo.png";
import FacebookIcon from "../img/social/facebook.svg";
import "./footer.scss";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Bible Baptist Church"
            style={{ width: "14em", height: "3.78em" }}
          />
        </div>
        <div className="content">
          <div className="container footer-list-container">
            <div className="footer-list-group">
              <h4>About</h4>
              <ul className="footer-link-list">
                <li>
                  <Link to="/beliefs">Our Beliefs</Link>
                </li>
                <li>
                  <Link to="/leadership">Leadership</Link>
                </li>
              </ul>
            </div>
            <div className="footer-list-group">
              <h4>Contact</h4>
              <ul className="footer-link-list contact-list">
                <li>
                  <a className="clickable-link" href="tel:8082683115">
                    phone: (808) 268-3115
                  </a>
                </li>
                <li>
                  <a
                    className="clickable-link"
                    href="mailto:contact@bbchawaii.com"
                  >
                    email: contact@bbchawaii.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-group">
              <h4>Visit</h4>
              <ul className="footer-link-list contact-list">
                <li>Sunday: 10am</li>
                <li>
                  <a
                    className="visit-us-link"
                    href="https://goo.gl/maps/6u7N1fNT8cQG8Zhn6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div>1234 North Shore Avenue</div>
                    <div>Oahu, Hawaii 96814</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container copyright">
            Copyright © {new Date().getFullYear()} Bible Baptist Church. All
            rights reserved.
            <p>
              Created by{" "}
              <a
                className="copyright-link"
                href="https://marktkimball.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                MK Engineering
              </a>
            </p>
            <Link className="copyright-link" to="/credits">
              Credits
            </Link>
          </div>
          <div className="social">
            <a
              title="facebook"
              href="https://www.facebook.com/branchhillbaptist/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="social-icon"
                src={FacebookIcon}
                alt="Facebook"
                style={{ width: "1.5em", height: "1.5em" }}
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
