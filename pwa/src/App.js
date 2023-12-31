import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/resume' exact Component={Resume}/>
          <Route path='/Resume' exact Component={Resume}/>
          <Route path='*' exact Component={Home}/>
        </Routes>
        <Footer />
      </Router>  
    </>
    
  );
}

export default App;
