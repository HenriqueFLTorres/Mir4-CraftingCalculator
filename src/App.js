import react, { useState } from 'react';
import './App.css'
import { Content } from './Components/Content';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='MainBackground'>
      <Navbar />
      
      <Content/>
    </div>
  );
}

export default App;
