import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './Component/Signup';
import Profile from './Component/Profile';

const App = () => {
  
  return (
    <BrowserRouter>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>Signup</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
