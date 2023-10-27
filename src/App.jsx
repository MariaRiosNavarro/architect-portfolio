import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Context/Context";
import { LoadingContext } from "./Context/Context";

const App = () => {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section className={theme ? "dark" : null}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <LoadingContext.Provider value={{ setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  {/* <Route path="/" element={}></Route>
          <Route path="/gallery" element={}></Route> */}
                </Routes>
              </BrowserRouter>
            ) : (
              <LoadingPage />
            )}
          </LoadingContext.Provider>
        </ThemeContext.Provider>
      </section>
    </>
  );
};

export default App;
