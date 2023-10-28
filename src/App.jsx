import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Context/Context";
import { LoadingContext } from "./Context/Context";
import Gallery from "./pages/Gallery";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { useState } from "react";
import Other from "./pages/Other";
// import "./App.scss";

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
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/gallery" element={<Gallery />}></Route>
                  <Route path="/other" element={<Other />}></Route>
                </Routes>
              </BrowserRouter>
            ) : (
              <Loading />
            )}
          </LoadingContext.Provider>
        </ThemeContext.Provider>
      </section>
    </>
  );
};

export default App;
