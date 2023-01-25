import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section3 from './Components/Section2';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar/>
   <Section1/>
   <Section3/>
  </React.StrictMode>
);

