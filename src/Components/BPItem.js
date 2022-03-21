import React, { useState, useEffect } from 'react'
import checkValue from '../Utils/checkValue'

import './BackpackMenu.css'

const BPItem = ({  name, image, category, rarity, tier, myBackpack, inventoryContent, index }) => {
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
        <div className='BPHead'>
            <div className='BPName'>{name}</div>
            <div className={`BPRarity ${rarity}`}>{rarity}</div>
        </div>
        <div className='BPFrame' onClick={() => {
            delete myBackpack[name]
            let targetIndex = inventoryContent.indexOf(index)
            inventoryContent.splice(targetIndex, index)
            localStorage.setItem("Backpack", JSON.stringify(myBackpack))
        }}>
            <img src={image} alt={name} />
            { tier ? <img className='Tier' src={`./Icons/tier${tier}.png`} alt={`tier ${tier}`} /> : <img className='Tier' src={`./Icons/tierHide.png`} alt={`no Tier`} /> }
        </div>
        <input type="number" value={value} onChange={(e) => { 
            setValue(checkValue(e.target.value, 1, 1000000000))
            setTimeout(() => {
                localStorage.setItem("Backpack", JSON.stringify(myBackpack))
            }, 400);
            }} />
    </div>
    )
}

export default BPItem