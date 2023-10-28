import Button from "../Button/Button";

const Intro = () => {
  return (
    <article>
      <div>
        <h2>Project</h2>
        <span>Lorum</span>
      </div>
      <div className="about-img-wrapper">
        <img src="/public/home/img1.jpeg" alt="building" />
        <Button name="VIEW PROJECT" />
      </div>
    </article>
  );
};

export default Intro;
