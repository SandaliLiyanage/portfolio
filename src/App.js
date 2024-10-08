import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Skills from './components/skills';
import Experience from './components/experience';
import { BrowserRouter} from 'react-router-dom';

function App() {

  
  return (
    <div>
        <div className="App">
          <BrowserRouter>
              <Nav />
              <Home />
              <Projects />
              <Skills />
              <Experience/>
              <Contacts />
          </BrowserRouter>
        
      </div>
    </div>
    
  );
}

export default App;
