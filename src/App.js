import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './pages/Header';
import Login from './pages/Login'
import Register from './pages/Register';
import Contect from './pages/Contect';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<main><Header/><Home/></main>}/>
        <Route path='/login' element={<main><Header/><Login/></main>}/>
        <Route path='/register' element={<main><Header/><Register/></main>}/>
        <Route path='/contact' element={<main><Header/><Contect/></main>}/>
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
