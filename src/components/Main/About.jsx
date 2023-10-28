import Button from "../Button/Button";
import "./About.scss";

const About = () => {
  return (
    <article className="about-grid">
      <div className="about-img-wrapper one">
        <img src="/public/home/img2.jpeg" alt="building" />
      </div>
      <div className="about-img-wrapper two">
        <img src="/public/home/img3.jpeg" alt="building" />
      </div>
      <div className="about-img-wrapper three">
        <img src="/public/home/img4.jpeg" alt="building" />
      </div>
      <div className="about-text-wrapper text">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <Button name="READ MORE" />
      </div>
    </article>
  );
};

export default About;
