import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./Projects";
import  Contact  from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <div>
      <Home />
      <div>
        <About />
        <div>
          <Projects />
      <div>
      <Contact />
      </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}

export default App;
