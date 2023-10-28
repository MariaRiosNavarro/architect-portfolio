// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import GeoIcon from "../../assets/svg/GeoIcon";
import PhoneIcon from "../../assets/svg/PhoneIcon";
import MailIcon from "../../assets/svg/MailIcon";
import FbIcon from "../../assets/svg/FbIcon";
import TwIcon from "../../assets/svg/TwIcon";
import InstaIcon from "../../assets/svg/InstaIcon";
import PinIcon from "../../assets/svg/PinIcon";

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
          <h2 className="copyright">© 2021 All Rights Reserved</h2>
        </section>
      </footer>
    </>
  );
};

// Footer.propTypes = {
//   property: PropTypes.string,
// };

export default Footer;
