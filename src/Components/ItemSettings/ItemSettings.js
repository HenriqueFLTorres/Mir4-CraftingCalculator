import React from 'react'
import { useSelect } from '../Hooks/SelectedContext'
import './ItemSettings.css'

import ItemsList from '../../Data/ItemsList.json'
import ItemConfigUI from './ItemConfigUI'

const ItemSettings = () => {
  const selected = useSelect();
  

  return (
    <div className='ItemSettings'>
      {ItemsList.map((item, index) => {
        const { name, image, rarity, recipe, tier } = item;
        
        return ( selected.includes(index) &&
          <ItemConfigUI key={index} index={index} name={name} image={image} rarity={rarity} recipe={recipe} tier={tier} />
        )
      })}
    </div>
  )
}

export default ItemSettings