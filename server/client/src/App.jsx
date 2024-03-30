import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Fetchcategories from './Fetchcategories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Fetchcategories /></>} />
        <Route path="/fetchcategories" element={<><Fetchcategories /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;