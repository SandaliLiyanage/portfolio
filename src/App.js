import './App.css';
import Home from './components/home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <div>
        <div className="App">
          <Nav />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </BrowserRouter>
        
      </div>
    </div>
    
  );
}

export default App;
