import "./Loading.scss";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/Context";

const Loading = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <article className="animation">
        <h2>Loading . . .</h2>
      </article>
    </>
  );
};

export default Loading;
