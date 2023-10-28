import Button from "../Button/Button";

const Project = () => {
  return (
    <article className="project-wrapper">
      <h2>Our Projects</h2>
      <div className="projects-img-wrapper">
        <div className="p-img-wrapper">
          <img src="/public/home/img5.png" alt="" />
          <h3>Sample Project</h3>
          <Button name="VIEW MORE" />
        </div>
        <div className="p-img-wrapper">
          <img src="/public/home/img6.png" alt="" />
        </div>
        <div className="p-img-wrapper">
          <img src="/public/home/img7.png" alt="" />
        </div>
        <div className="p-img-wrapper">
          <img src="/public/home/img8.png" alt="" />
        </div>
        <div className="p-img-wrapper">
          <img src="/public/home/img9.png" alt="" />
        </div>
      </div>
      <Button name="ALL PROJECTS" />
    </article>
  );
};

export default Project;
