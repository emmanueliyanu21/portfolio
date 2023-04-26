import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './modules/home/home';
import Portfolio from './modules/portfolio/portfolio';
import Certification from './modules/certification/certification';
import About from './modules/about/about';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/certification" element={ <Certification /> } />
          <Route path="/about" element={ <About /> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
