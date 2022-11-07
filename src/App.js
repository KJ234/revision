import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/contact';
import Revision from './pages/revision';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Revision' element={<Revision />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
