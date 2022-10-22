import logo from './logo.svg';
import './App.css';
import Github from './Components/Github/github.jsx';
import Navbar from './Components/Navbar/Navbar';

import About from './Components/About/About';
import Projects from './Components/Footers/Footer';
import Priya from './Components/Priya/Priya';
import Knowledge from './Components/knowledge/knowledge';
import Footer from './Components/Footers/Footer';
import Project from './Components/Projects/Project';
import Skill from './Components/Skiils/Skill';

function App() {
  return (
    <div className="App">
      <Navbar/>
   
      <Priya/>
     <About/>
     <Skill/>
     <Knowledge/>
     <Project/>
    
      <Github/> 
      <Footer/>
      
    </div>
  );
}

export default App;
