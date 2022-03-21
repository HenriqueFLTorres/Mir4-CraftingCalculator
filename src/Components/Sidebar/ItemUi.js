import React, { useEffect } from 'react'
import { useSelect, useSelectUpdate } from '../Hooks/SelectedContext'
import Sidebar from './Sidebar'

import './Sidebar.css'

const ItemUi = ({ name, image, category, rarity, index, tier, inventory, inventoryContent, setInventoryContent }) => {
  const selected = useSelect();
  const updateSelected = useSelectUpdate();

  return (
    <div className={`ItemUI${selected.includes(index) ? ' Active' : ''}`} onClick={() =>{
      if ( !inventory ) {
        if ( selected.includes(index) ) {
          updateSelected(selected.filter(indexNumber => indexNumber != index))
        } else {
          updateSelected(selected.concat(index))
        }
      } else {
        if ( inventoryContent.includes(index) ) {
          let newList = inventoryContent.filter((indexNumber) => indexNumber != index)
          setInventoryContent(newList)
        }  else {
          setInventoryContent(inventoryContent.concat(index))
        }
      }
      
    }}>
        <div className='ImageFrame'>
            <img src={image} alt={name} />
            { tier ? <img className='Tier' src={`./Icons/tier${tier}.png`} alt={`tier ${tier}`} /> : <img className='Tier' src={`./Icons/tierHide.png`} alt={`no Tier`} /> }
        </div>
        <div className='ItemInfo' data-fullname={name} >
            <div className='ItemName'>{name.length > 25 ? `${name.substring(0, 25)}...` : name}</div>
            <div className='ItemCategory'>{category}</div>
            <div className={`ItemRarity ${rarity}`}>{rarity}</div>
        </div>
    </div>
  )
}

export default ItemUi