// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import ToggleDark from "../../assets/svg/toggleDark";
import Logo from "../../assets/svg/logo";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleToggleDark = () => {
    setTheme((value) => !value);
  };
  return (
    <>
      <header>
        <h1 aria-label="logo of arquitect portfolio">
          <Logo />
        </h1>
        <div className="nav-wrapper">
          <nav>
            <NavLink to="/">MAIN</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/">PROJECTS</NavLink>
            <NavLink to="/">CERTIFICATIONS</NavLink>
            <NavLink to="/">CONTACTS</NavLink>
          </nav>
          <span onClick={handleToggleDark}>
            <ToggleDark />
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
