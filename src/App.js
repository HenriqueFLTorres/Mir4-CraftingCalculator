import react, { useState, useEffect } from 'react';
import './App.css'
import { Content } from './Components/Content';
import Navbar from './Components/Navbar/Navbar';

let languageStorage = localStorage.getItem("Language")

function App() {
  const [language, setLanguage] = useState(languageStorage ? languageStorage : "EN")

  useEffect(() => {
    if ( localStorage.getItem("Language") === null ) {
      localStorage.setItem("Language", "EN")
      setLanguage("EN")
    }

  }, [])

  return (
    <div className='MainBackground'>
      <Navbar language={language} setLanguage={setLanguage} />
      <Content language={language}/>
    </div>
  );
}

export default App;
