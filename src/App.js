import react, { useState, useEffect } from 'react';
import './App.css'
import { Content } from './Components/Content';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    if ( localStorage.getItem("Language") === null ) {
      localStorage.setItem("Language", "EN")
    }

    setLanguage(localStorage.getItem("Language"))
  }, [])

  useEffect(() => {
    localStorage.setItem("Language", language)
  }, [language])


  return (
    <div className='MainBackground'>
      <Navbar language={language} setLanguage={setLanguage} />
      <Content language={language}/>
    </div>
  );
}

export default App;
