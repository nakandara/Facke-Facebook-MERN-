import './App.css';
import NavBar from './components/NavBar';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import Fb from './components/Fb';
import Photo from './components/Photo';
import Fb1 from './components/Fb1';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/add" element={<AddStudent />} exact />
        <Route path="/getall" element={<AllStudent />} exact />
        <Route path='/facebook' element={<Fb />} exact />
        <Route path="/photo1" element={<Photo />} exact />
        <Route path="/photo2" element={<Fb1 />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
