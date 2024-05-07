
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/home/NavBar.jsx';
import Home from './components/home/Home.jsx';
import DropDown from './components/DropDown1.jsx';
import DropDown1 from './components/DropDown1.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nav' element={<NavBar/>}/>
        <Route path='/Drop1' element={<DropDown1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
