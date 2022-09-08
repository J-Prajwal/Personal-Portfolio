import About from "./Components/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import Thoughts from "./Components/Thoughts";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  return (
    <>
      <Navbar />
      <About />
      <Thoughts />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
