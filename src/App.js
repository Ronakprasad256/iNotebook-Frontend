import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message={"This is amazing React course"} />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
