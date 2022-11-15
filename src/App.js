
import './App.css';
import WithSubnavigation from './Components/Navbar/NavbarTwo';
import { GitHub } from './Components/Github/Pthub';
import About from './Components/About/About';
import Skill from './Components/Skiils/Skill';
import Project from './Components/Projects/Project';
import Footer from './Components/Footers/Footer';
import Priya from './Components/Priya/Priya';
import Knowledge from './Components/knowledge/knowledge';

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
     
   
     <Priya/>
    <About/>
    <Skill/>
    <Knowledge/>
    <Project/>
   
   
     <GitHub/>
     <Footer/>
      
    </div>
  );
}

export default App;
