import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
