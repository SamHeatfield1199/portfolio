import "./App.css";
import About from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <span id="home">
        <Home />
      </span>
      <span id="projects">
        <Projects />
      </span>
      <span id="skills">
        <Skills />
      </span>
      <span id="about">
        <About />
      </span>
      <span id="contact">
        <ContactMe />
      </span>
      <Footer />
    </div>
  );
}

export default App;
