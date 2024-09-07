import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import You from './pages/You';
import Are from './pages/Are';
import Mine from './pages/Mine';
import NoPage from './pages/NoPage';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/you" element={<You />} />
          <Route path="/are" element={<Are />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
    </div>
  )
}

export default App;
