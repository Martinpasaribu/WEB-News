import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './Component/view/Home';
import { Coba } from './features/coba';
import { Layout } from './Component/Layout/Layout';
function App() {
  return (
    <div > 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/coba" element={<Coba/>}/>
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
