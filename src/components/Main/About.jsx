import Button from "../Button/Button";

const About = () => {
  return (
    <article className="about-grid">
      <div className="about-img-wrapper">
        <img src="/public/home/img2.jpeg" alt="building" />
      </div>
      <div className="about-img-wrapper">
        <img src="/public/home/img3.jpeg" alt="building" />
      </div>
      <div className="about-img-wrapper">
        <img src="/public/home/img4.jpeg" alt="building" />
      </div>
      <div className="about-text-wrapper">
        <h2>About</h2>
        <p></p>
        <Button name="READ MORE" />
      </div>
    </article>
  );
};

export default About;
