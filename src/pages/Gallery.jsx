// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./Gallery.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Gallery = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <>
      <Header />
      <article>
        <h2>Gallery</h2>
        {/* <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click +1
        </button>
        <p>{count}</p>
        <Link to="/">See More</Link> */}
      </article>
      <Footer />
    </>
  );
};

// Gallery.propTypes = {
//   property: PropTypes.string,
// };

export default Gallery;
