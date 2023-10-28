// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import Logo from "../../assets/svg/Logo";
import LightIcon from "../../assets/svg/LightIcon";
import DarkIcon from "../../assets/svg/DarkIcon";
import "./Header.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleDark = () => {
    setTheme((value) => !value);
  };
  return (
    <>
      <header className="header-wrapper row space">
        <span
          className="logo-wrapper icon-wrapper center-row"
          aria-label="logo of arquitect portfolio"
        >
          <Logo id="logo" />
        </span>
        <div className="nav-wrapper row">
          <nav className="row">
            <NavLink to="/">MAIN</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/other">PROJECTS</NavLink>
            <NavLink to="/other">CERTIFICATIONS</NavLink>
            <NavLink to="/other">CONTACTS</NavLink>
          </nav>
          <span onClick={handleToggleDark} className="icon-wrapper center-row">
            {theme ? <LightIcon /> : <DarkIcon />}
          </span>
        </div>
      </header>
    </>
  );
};

// Header.propTypes = {
//   property: PropTypes.string,
// };

export default Header;
