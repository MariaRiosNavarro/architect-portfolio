import "./Loading.scss";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/Context";
import Animation from "../components/Animation/Animation";
const Loading = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <article className="animation">
        <h2>Loading . . .</h2>
        <Animation />
      </article>
    </>
  );
};

export default Loading;
