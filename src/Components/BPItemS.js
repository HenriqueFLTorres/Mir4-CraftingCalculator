import React, { useState, useEffect } from 'react'
import checkValue from '../Utils/checkValue'
import millify from 'millify'

import './BackpackMenu.css'

const BPItemS = ({  name, image, myBackpack, language }) => {
    const [value, setValue] = useState(1)
    const [DetailedValue, setDetailedValue] = useState(false)
    let parsedBP = JSON.parse(localStorage.getItem("Backpack"))

    let fancyAmount = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    
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
                <img src={`../../Icons/${language}/${image}.png`} alt={name} />
                <img className='Tier' src={`./Icons/tierHide.png`} alt={`no Tier`} />
            </div>
            <input placeholder='0' type="number" value={value} onChange={(e) => { 
                setValue(checkValue(e.target.value, undefined, 1000000000))
                setTimeout(() => {
                    localStorage.setItem("Backpack", JSON.stringify(myBackpack))
                }, 400);
                }} onFocusCapture={() => setDetailedValue(true)} onBlur={() => setDetailedValue(false)} />
            </div>
            <div data-value={fancyAmount} className={`DetailedValue ${DetailedValue}`}>{value ? millify(value) : 0}</div>
        </div>
    )
}

export default BPItemS