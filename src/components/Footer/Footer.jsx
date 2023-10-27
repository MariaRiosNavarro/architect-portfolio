import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>Footer</h1>
      <section>
        <article>
          {/* <h2>{props.property}</h2> */}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click +1
          </button>
          <p>{count}</p>
          <Link to="/">See More</Link>
        </article>
      </section>
    </>
  );
};

Footer.propTypes = {
  property: PropTypes.string,
};

export default Footer;
