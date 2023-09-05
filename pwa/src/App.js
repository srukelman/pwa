import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/resume' exact Component={Resume}/>
        </Routes>
      </Router>  
    </>
    
  );
}

export default App;
