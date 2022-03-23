import React from 'react'
import { useSelect } from '../Hooks/SelectedContext'
import './ItemSettings.css'


import itemsList from '../../Data/ItemsList.json'
import ItemConfigUI from './ItemConfigUI'

const ItemSettings = ({ itemClass, setItemClass, icon }) => {
  const selected = useSelect();
  

  return (
    <div className='ItemSettings'>
      {itemsList.map((item, index) => {
        const { name, image, rarity, recipe, tier, names, images, imageSecondary } = item;

        let nameSet
        let imageSet
        
        if ( !name ) {
          nameSet = names[`name${itemClass}`]
          imageSet = images[`image${itemClass}`]
        }


        
        return ( selected.includes(index) &&
          <ItemConfigUI key={index} index={index} name={name} image={image} rarity={rarity} recipe={recipe} tier={tier} nameSet={nameSet} imageSet={imageSet} icon={icon} imageS={imageSecondary}  />
        )
      })}
    </div>
  )
}

export default ItemSettings