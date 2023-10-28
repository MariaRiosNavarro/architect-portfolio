// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Other.scss";

const Other = () => {
  //     const [count, setCount] = useState(0);
  //     useEffect(() => {
  //         console.log(count);
  // }, [count]);

  return (
    <>
      <Header />
      <section>
        <h2>In construction...</h2>
        {/* <article>
                        <h2>{props.property}</h2>
                        <button onClick={() => {setCount(count + 1);}}>click +1</button>
                        <p>{count}</p>
                        <Link to='/'>See More</Link>
                    </article> */}
      </section>
      <Footer />
    </>
  );
};

// Other.propTypes = {
// property: PropTypes.string };

export default Other;
