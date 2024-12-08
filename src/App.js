import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Education from './Components/Education';
import  Skills  from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className= "overflow-y-auto overflow-x-hidden scrollbar-hide scroll-m-80 h-screen w-screen scroll-smooth">
      <Navbar/>
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
