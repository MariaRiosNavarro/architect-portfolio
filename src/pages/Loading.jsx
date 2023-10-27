import "./Loading.scss";
import { useContext } from "react";
import { LoadingContext } from "../Context/Context";

const Loading = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      <h1>Loading</h1>
      <article className="animation"></article>
    </>
  );
};

export default Loading;
