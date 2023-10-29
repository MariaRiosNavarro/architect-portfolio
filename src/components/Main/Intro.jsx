import Button from "../Button/Button";
import "./Intro.scss";

const Intro = () => {
  return (
    <article className="intro-wrapper">
      <div className="intro-text">
        <h2>Project</h2>
        <span>Lorum</span>
      </div>
      <div className="intro-img-wrapper">
        <div className="img-relativ">
          <img src="public/home/img1.jpeg" alt="building" />
          <Button name="VIEW PROJECT" />
        </div>
      </div>
    </article>
  );
};

export default Intro;
