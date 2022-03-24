import react, { useState } from 'react';
import './App.css'
import { Content } from './Components/Content';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [language, setLanguage] = useState("PT-BR")

  return (
    <div className='MainBackground'>
      <Navbar language={language} setLanguage={setLanguage} />
      <Content language={language}/>
    </div>
  );
}

export default App;
