import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
      </Router>  
    </>
    
  );
}

export default App;
