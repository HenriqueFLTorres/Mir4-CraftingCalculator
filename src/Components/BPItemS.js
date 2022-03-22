import React, { useState, useEffect } from 'react'
import checkValue from '../Utils/checkValue'

import './BackpackMenu.css'

const BPItemS = ({  name, image, myBackpack }) => {
    const [value, setValue] = useState(1)
    let parsedBP = JSON.parse(localStorage.getItem("Backpack"))

    
    useEffect(() => {
        ( parsedBP && Object.keys(parsedBP).includes(name) ) && setValue(parsedBP[name])
    }, [])    

    useEffect(() => {
        Object.assign(myBackpack, {[name]: Number(value)})
    }, [value])

  return (
        <div className='BPItem'>
            <div className='BPItem'>
            <div className='BPHead'>
                <div className='BPName'>{name}</div>
            </div>
            <div className="BPFrame Default" >
                <img src={`../../Icons/${image}.png`} alt={name} />
                <img className='Tier' src={`./Icons/tierHide.png`} alt={`no Tier`} />
            </div>
            <input type="number" value={value} onChange={(e) => { 
                setValue(checkValue(e.target.value, 1, 1000000000))
                setTimeout(() => {
                    localStorage.setItem("Backpack", JSON.stringify(myBackpack))
                }, 400);
                }} />
            </div>
        </div>
    )
}

export default BPItemS