import React from 'react'
import { useSelect } from '../Hooks/SelectedContext'
import './ItemSettings.css'


import handleMap from '../../Utils/classSelectHandler.js'
import ItemConfigUI from './ItemConfigUI'

const ItemSettings = ({ itemClass, setItemClass }) => {
  const selected = useSelect();
  

  return (
    <div className='ItemSettings'>
      {handleMap(itemClass).map((item, index) => {
        const { name, image, rarity, recipe, tier } = item;
        
        return ( selected.includes(index) &&
          <ItemConfigUI key={index} index={index} name={name} image={image} rarity={rarity} recipe={recipe} tier={tier} setItemClass={setItemClass} itemClass={itemClass} />
        )
      })}
    </div>
  )
}

export default ItemSettings