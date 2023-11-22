import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/exprience';
import Project from './pages/project';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />}></Route>
          <Route path="/about" element={< About />}></Route>
          <Route path="/experience" element={< Experience type={false}/>}> </Route>
          <Route path="/project" element={ <Project type={false} />}> </Route>
          <Route path="/contact" element={ <Contact />} ></Route>      
        </Routes>
        <Footer/>   
      </div>
    </Router>   
  );
}

export default App;
