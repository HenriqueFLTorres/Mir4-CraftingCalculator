import React from 'react'
import { useSelect, useSelectUpdate } from '../Hooks/SelectedContext'
import backpackCalcDetector from '../../Utils/backpackCalcDetector'

import './Sidebar.css'

const ItemUi = ({ name, image, imageS, category, rarity, index, tier, inventory, inventoryContent, setInventoryContent, icon, nameSet, imageSet, language }) => {

  const selected = useSelect();
  const updateSelected = useSelectUpdate();


  return (
    <div className={`ItemUI${selected.includes(index) ? ' Active' : ''}`} onClick={() =>{
      // Complex if statement to check if the inventory is open
      backpackCalcDetector(inventory, selected, index, updateSelected, inventoryContent, setInventoryContent)
    }}>
        <div className={`ImageFrame ${rarity}`}>
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
        <div className='ItemInfo' data-fullname={name || nameSet} >
            <div className='ItemName'>{
            name ? ( name.length > 25 ? `${name.substring(0, 25)}...` : name ) :
            ( nameSet.length > 25 ? `${nameSet.substring(0, 25)}...` : nameSet )
            }</div>
            <div className='ItemCategory'>{category}</div>
            <div className={`ItemRarity ${rarity}`}>{rarity}</div>
        </div>
    </div>
  )
}

export default ItemUi