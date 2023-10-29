import "./Gallery.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PhotoGallery from "../components/Gallery/PhotoGallery";

const Gallery = () => {
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  return (
    <>
      <Header />
      <article className="gallery-wrapper">
        <h2>Gallery</h2>
        <span>Photos</span>
        <PhotoGallery />
      </article>
      <Footer />
    </>
  );
};

// Gallery.propTypes = {
//   property: PropTypes.string,
// };

export default Gallery;
