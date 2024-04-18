import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./components/Particles";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {

  

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      {/* <Contact /> */}
      <ParticlesComponent />
    </div>
  );
}

export default App;
