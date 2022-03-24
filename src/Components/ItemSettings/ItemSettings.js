import React from 'react'
import { useSelect } from '../Hooks/SelectedContext'
import './ItemSettings.css'


import itemsList from '../../Data/ItemsList.json'
import ItemConfigUI from './ItemConfigUI'
import handleLanguage from '../../Utils/handleLanguage'

const ItemSettings = ({ itemClass, icon, language }) => {
  const selected = useSelect();
  

  return (
    <div className='ItemSettings'>
      {handleLanguage(language).map((item, index) => {
        const { name, image, rarity, recipe, tier, names, images, imageSecondary } = item;

        let nameSet
        let imageSet
        
        if ( !name ) {
          nameSet = names[`name${itemClass}`]
          imageSet = images[`image${itemClass}`]
        }


        
        return ( selected.includes(index) &&
          <ItemConfigUI key={index} index={index} name={name} image={image} rarity={rarity} recipe={recipe} tier={tier} nameSet={nameSet} imageSet={imageSet} icon={icon} imageS={imageSecondary} language={language}  />
        )
      })}
    </div>
  )
}

export default ItemSettings