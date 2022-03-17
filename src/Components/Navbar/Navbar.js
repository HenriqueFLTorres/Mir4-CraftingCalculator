import React, { useState, useEffect } from 'react'
import Navitems from '../../Data/Navitems.json'

import Mir4Dark from '../../Images/Mir4Dark.png'
import Mir4Light from '../../Images/Mir4Light.png'

import Moon from '../SVG/Icons/Moon.js'
import Sun from '../SVG/Icons/Sun.js'

import './Navbar.css'

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [selected, setSelected] = useState(0)

    const root = document.getElementById('root');
    const themeStorage = localStorage.getItem('DarkTheme')

    useEffect(() => {
        if ( themeStorage === 'true' ) {
            root.classList.add('Dark')
            setDarkTheme(true)
        }
    }, [])
    

  return (
    <div className='MainNavbar'>
        <img className='LogoContainer' src={darkTheme ? Mir4Dark : Mir4Light} alt="Mir4Logo" />
        <ul className='NavbarItems'>
            { Navitems.map((item, index) => ( 
            <li key={index} onClick={() => setSelected(index)} className={selected === index ? 'Active' : 'Unselected'}>
                {item}
            </li>
            ))}
        </ul>
        <div className='ThemeIconContainer' onClick={() => {
            root.classList.toggle('Dark');
            setDarkTheme(!darkTheme);
            localStorage.setItem('DarkTheme', !darkTheme)
            }}>

            <Moon className={darkTheme ? 'ThemeIcon On' : 'ThemeIcon Off'}/>
            <Sun className={darkTheme ? 'ThemeIcon Off' : 'ThemeIcon On'}/>

        </div>
    </div>
  )
}

export default Navbar