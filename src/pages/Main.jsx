import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import "./Main.scss";
import Footer from "../components/Footer/Footer";
import About from "../components/Main/About";
import Intro from "../components/Main/Intro";
import Mision from "../components/Main/Mision";
import Project from "../components/Main/Projects";
import Contact from "../components/Main/Contact";

const Main = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <>
      <Header />
      <section>
        <Intro />
        <About />
        <Mision />
        <Project />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

// Main.propTypes = {
//   property: PropTypes.string,
// };

export default Main;
