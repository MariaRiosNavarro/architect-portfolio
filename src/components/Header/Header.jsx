// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import { toggleDark } from "../../assets/svg/toggleDark";
import { logo } from "../../assets/svg/logo";
const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleToggleDark = () => {
    setTheme((value) => !value);
  };
  return (
    <>
      <header>
        <h1 aria-label="logo of arquitect portfolio">{logo}</h1>
        <nav>
          <NavLink>MAIN</NavLink>
          <NavLink>GALLERY</NavLink>
          <NavLink>PROJECTS</NavLink>
          <NavLink>CERTIFICATIONS</NavLink>
          <NavLink>CONTACTS</NavLink>
        </nav>
        <span onClick={handleToggleDark}>{toggleDark}</span>
      </header>
    </>
  );
};

// Header.propTypes = {
//   property: PropTypes.string,
// };

export default Header;
