import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Tours from "./components/Tours";
import Contact from "./components/contact";
import Offer2 from "./components/Offer2";
import Review from "./components/Review";
import SimpleSlider from "./components/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogCard from "./components/BlogCard"; // Import komponentu szczegółowego

const App = () => {
  return (
    <Router>
      <div
        id="app"
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
      >
        {/** komentarz */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.68),rgba(35,27,48,0.68))]"></div>
        </div>
        <div className="">
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="mx-1 xl:mx-24">
                  <Hero />
                </div>
                <div>
                  <SimpleSlider />
                </div>
                <div className="mx-1 xl:mx-24">
                  <About />
                  <Offer />
                  <Tours />
                  <Review />
                  <Offer2 />
                </div>
                <Contact />
              </>
            }
          />
          {/* Trasa do listy blogów */}
          <Route path="/blog" element={<Blogs />} />
          {/* Trasa do szczegółowej strony bloga z dynamicznym ID */}
          <Route path="/blog/:id" element={<BlogCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
