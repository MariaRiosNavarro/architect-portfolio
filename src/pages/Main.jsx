import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import "./Main.scss";
import Footer from "../components/Footer/Footer";

const Main = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <Header />
      <article>
        <h2>Main</h2>
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
      <Footer />
    </>
  );
};

// Main.propTypes = {
//   property: PropTypes.string,
// };

export default Main;
