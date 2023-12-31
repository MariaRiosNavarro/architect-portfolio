import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";
import Logo from "../HeaderSvg/Logo";
import LightIcon from "../HeaderSvg/LightIcon";
import DarkIcon from "../HeaderSvg/DarkIcon";
import "./Header.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleDark = () => {
    setTheme((value) => !value);
  };
  return (
    <>
      <header className="header-wrapper">
        <span className="logo-wrapper icon-wrapper">
          <Logo />
        </span>
        <div className="nav-wrapper">
          <nav className="nav-wrapper-links">
            <NavLink to="/">MAIN</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/other">PROJECTS</NavLink>
            <NavLink to="/other">CERTIFICATIONS</NavLink>
            <NavLink to="/other">CONTACTS</NavLink>
          </nav>
          <span onClick={handleToggleDark} className="icon-wrapper">
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
