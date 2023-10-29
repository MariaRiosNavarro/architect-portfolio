import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Arrow from "../ButtonSvg/Arrow";
import "./Button.scss";

const Button = ({ name }) => {
  return (
    <Link className="btn" to="/">
      {name}
      <Arrow />
    </Link>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
};
