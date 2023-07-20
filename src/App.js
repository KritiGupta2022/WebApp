
import React from 'react';
import './App.css';

import Home from './Components/home';
import Footer from './Components/footer'
import { Navigation } from './Components/navbar';






function App() {
  return (
    <div>
    <Navigation/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
