import React, { useState, useEffect } from 'react'
import checkValue from '../Utils/checkValue'

import './BackpackMenu.css'

const BPItem = ({  name, image, rarity, tier, myBackpack, inventoryContent, index, nameSet, imageSet, imageS, icon, itemClass }) => {
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
            <div className='BPName'>{name ? name : nameSet}</div>
            <div className={`BPRarity ${rarity}`}>{rarity}</div>
        </div>
        <div className={`BPFrame ${rarity}`} onClick={() => {
            delete myBackpack[name]
            let targetIndex = inventoryContent.indexOf(index)
            inventoryContent.splice(targetIndex, index)
            localStorage.setItem("Backpack", JSON.stringify(myBackpack))
        }}>
            {  
                imageSet ?
                // Checks if the imageSet has more than one image and displays it
               ( imageSet.length > 1 ? ( icon ? <img src={imageSet[0]} alt={nameSet} /> : <img src={imageSet[1]} alt={nameSet} /> )
                :
                <img src={imageSet} alt={nameSet} /> )
                :
                // If the item is the same for all classes, it's only shown a global image
                ( imageS ?
                ( icon ? <img src={imageS[0]} alt={name} /> : <img src={imageS[1]} alt={name} /> ) :
                <img src={image} alt={name} /> ) 
            }
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