import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Skills from './components/skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div>
        <div className="App">
          <BrowserRouter>
              <Nav />
              <Home />
              <Projects />
              <Skills />
              <Contacts />
          </BrowserRouter>
        
      </div>
    </div>
    
  );
}

export default App;
