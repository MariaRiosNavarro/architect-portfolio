import "./Animation.scss";

const Animation = () => {
  return (
    <article className="animation-wrapper">
      <div className="loader">
        <div className="roof"></div>
        <div className="wall left-wall"></div>
        <div className="wall right-wall"></div>
        <div className="floor"></div>
      </div>
    </article>
  );
};

export default Animation;
