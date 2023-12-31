import Button from "../Button/Button";
import "./Projects.scss";

const Projects = () => {
  return (
    <article className="project-wrapper">
      <h2>Our Projects</h2>
      <div className="projects-img-wrapper">
        <div className="projects-row">
          <div className="p-img-wrapper first-wrapper">
            <img src="./home/img5.png" alt="" />
            <div className="projects-text">
              <h3>Sample Project</h3>
              <Button name="VIEW MORE" className="special-btn" />
            </div>
          </div>
          <div className="p-img-wrapper">
            <img src="./home/img6.png" alt="" />
          </div>
        </div>
        <div className="projects-row">
          <div className="p-img-wrapper">
            <img src="./home/img7.png" alt="" />
          </div>
          <div className="p-img-wrapper">
            <img src="./home/img8.png" alt="" />
          </div>
          <div className="p-img-wrapper">
            <img src="./home/img9.png" alt="" />
          </div>
        </div>
      </div>
      <Button name="ALL PROJECTS" />
    </article>
  );
};

export default Projects;
