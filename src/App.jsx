import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Tours from "./components/Tours";
import Contact from "./components/contact";
import Offer2 from "./components/Offer2";
import Review from "./components/Review";

const App = () => {
  return (
    <div
      id="app"
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      {" "}
      {/** komentarz */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.68),rgba(35,27,48,0.68))]"></div>
      </div>
      <Navbar />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Offer />
        <Tours />
        <Review />
        <Offer2 />
      </div>
      <Contact />
    </div>
  );
};

export default App;
