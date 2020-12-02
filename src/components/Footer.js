import React from "react";
import { Link, StaticQuery } from "gatsby";
import logo from "../img/bbc-logo.png";
import FacebookIcon from "../img/social/facebook.svg";
import TwitterIcon from "../img/social/twitter.svg";
import InstagramIcon from "../img/social/instagram.svg";
import YoutubeIcon from "../img/social/youtube.svg";
import VimeoIcon from "../img/social/vimeo.svg";

import "./footer.scss";

export const Footer = ({
  addressLineOne,
  addressLineTwo,
  googleMapsLink,
  emailAddress,
  serviceTime,
  phoneNumber,
  facebookLink,
  twitterLink,
  instagramLink,
  youtubeLink,
  vimeoLink,
}) => (
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
              <a
                className="clickable-link"
                href={`tel:${phoneNumber.replace(/[^\w]/gi, "")}`}
              >
                phone: {phoneNumber}
              </a>
            </li>
            <li>
              <a className="clickable-link" href={`mailto:${emailAddress}`}>
                email: {emailAddress}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list-group">
          <h4>Visit</h4>
          <ul className="footer-link-list contact-list">
            <li>{serviceTime}</li>
            <li>
              <a
                className="visit-us-link"
                href={googleMapsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>{addressLineOne}</div>
                <div>{addressLineTwo}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="container copyright">
        Copyright © {new Date().getFullYear()} Bible Baptist Church. All rights
        reserved.
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
        {facebookLink && (
          <a
            title="facebook"
            href={facebookLink}
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
        )}
        {twitterLink && (
          <a
            title="twitter"
            href={twitterLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              src={TwitterIcon}
              alt="Twitter"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        )}
        {instagramLink && (
          <a
            title="instagram"
            href={instagramLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              src={InstagramIcon}
              alt="Instagram"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        )}
        {youtubeLink && (
          <a
            title="youtube"
            href={youtubeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              src={YoutubeIcon}
              alt="Youtube"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        )}
        {vimeoLink && (
          <a
            title="vimeo"
            href={vimeoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              src={VimeoIcon}
              alt="Vimeo"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </a>
        )}
      </div>
    </div>
  </footer>
);

export const ConnectedFooter = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(
          frontmatter: { type: { eq: "page-content" }, name: { eq: "footer" } }
        ) {
          frontmatter {
            serviceTime
            phoneNumber
            emailAddress
            addressLineOne
            addressLineTwo
            googleMapsLink
            facebookLink
            twitterLink
            instagramLink
            youtubeLink
            vimeoLink
          }
        }
      }
    `}
    render={(data) => {
      return <Footer {...data.markdownRemark.frontmatter} />;
    }}
  />
);

export default ConnectedFooter;
