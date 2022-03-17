import React, { useEffect } from 'react'
import { useSelect, useSelectUpdate } from '../Hooks/SelectedContext'
import Sidebar from './Sidebar'

import './Sidebar.css'

const ItemUi = ({ name, image, category, rarity, recipe, index, filter }) => {
  const selected = useSelect();
  const updateSelected = useSelectUpdate();

  return (
    <div className={`ItemUI${selected.includes(index) ? ' Active' : ''}`} onClick={() =>{
      if ( selected.includes(index) ) {
        updateSelected(selected.filter(indexNumber => indexNumber != index))
      } else {
        updateSelected(selected.concat(index))
      }
    }}>
        <div className='ImageFrame'>
            <img src={image} alt={name} />
        </div>
        <div className='ItemInfo'>
            <div className='ItemName'>{name}</div>
            <div className='ItemCategory'>{category}</div>
            <div className={`ItemRarity ${rarity}`}>{rarity}</div>
        </div>
    </div>
  )
}

export default ItemUi