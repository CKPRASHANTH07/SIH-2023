import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import  Contact  from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <div>
      <Home />
      <div>
        <About />
        <div >
          <Projects />
      <div>
        <Skills/>
        <div>
      <Contact />
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}

export default App;
