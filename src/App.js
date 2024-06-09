import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddStudent/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/View' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
