import React, { useEffect } from 'react';
import './CategoryFilter.css';

import ItensList from '../../Data/ItemsList.json'
const rarity = Array.from(new Set(ItensList.map((item, index) => ItensList[index].rarity)))


const CategoryFilter = ({ filter, setFilter }) => {

  useEffect(() => {
    setFilter(rarity)
  }, [])
  
  return (
    <div className='CategoryFilter' >
      {rarity.map((rarityName, index) => (
        <div key={index} 
        className={`RarityDiv${filter === rarityName ? ' True' : ''}`} 
        onClick={() => {
          if ( filter === rarityName ){
            setFilter(rarity)
          } else {
            setFilter(rarityName)
          }
        }}>
          <img src={`./ItemFrames/Rarity_${rarityName}_bg.png`} alt={rarityName} />
          <h3 className='RarityTitle'>{rarityName}</h3>
        </div>
      ))}
    </div>
  )
}

export default CategoryFilter