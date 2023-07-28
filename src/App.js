import Navbar from "./components/navbar";
import Home from "./components/home";
import  Contact  from "./components/contact";
import About from "./components/about";
function App() {
  return (
    <div>
      <Navbar />
      <div>
      <Home />
      <div>
        <About/>
      <div>
      <Contact />
      </div>
    </div>
    </div>
    </div>

    
  );
}

export default App;
