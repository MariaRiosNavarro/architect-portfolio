// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import GeoIcon from "../FooterSvg/GeoIcon";
import PhoneIcon from "../FooterSvg/PhoneIcon";
import MailIcon from "../FooterSvg/MailIcon";
import FbIcon from "../FooterSvg/FbIcon";
import TwIcon from "../FooterSvg/TwIcon";
import InstaIcon from "../FooterSvg/InstaIcon";
import PinIcon from "../FooterSvg/PinIcon";

const Footer = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <>
      <footer className="footer-wrapper">
        <section className="footer-articles-wrapper">
          <span className="footer-logo-wrapper">
            <img src="/public/footerLogo.png" alt="logo footer" />
          </span>
          <nav className="footer-nav">
            <h2>Information</h2>
            <div className="links">
              <NavLink to="/">Main</NavLink>
              <NavLink to="/Gallery">Gallery</NavLink>
              <NavLink to="/Other">Projects</NavLink>
              <NavLink to="/Other">Certifications</NavLink>
              <NavLink to="/Other">Contacts</NavLink>
            </div>
          </nav>
          <article className="footer-contact">
            <h2>Contacts</h2>
            <span className="contact-wrapper">
              <GeoIcon />
              <h3>1234 Sample Street Austin Texas 78704</h3>
            </span>
            <span className="contact-wrapper">
              <PhoneIcon />
              <h3>512.333.2222</h3>
            </span>
            <span className="contact-wrapper">
              <MailIcon />
              <h3>sampleemail@gmail.com</h3>
            </span>
          </article>
          <article className="footer-sz">
            <h2>Sozial Media</h2>
            <div className="sz-wrapper">
              <FbIcon />
              <TwIcon />
              <InstaIcon />
              <PinIcon />
            </div>
          </article>
        </section>
        <section>
          <h4 className="copyright">© 2021 All Rights Reserved</h4>
        </section>
      </footer>
    </>
  );
};

// Footer.propTypes = {
//   property: PropTypes.string,
// };

export default Footer;
