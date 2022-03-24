import React, { useEffect } from 'react';
import './CategoryFilter.css';

import ItemsList from '../../Data/ItemsList.json'

const rarity = Array.from(new Set(ItemsList.map((item, index) => ItemsList[index].rarity)))
const category = Array.from(new Set(ItemsList.map((item, index) => ItemsList[index].category)))

let allCategories = []

rarity.map((item) => allCategories.push(item) )
category.map((item) => allCategories.push(item) )


const CategoryFilter = ({ filter, setFilter }) => {

  useEffect(() => {
    filter.length === 0 && setFilter(allCategories)
  }, [filter])

  useEffect(() => {
    setFilter(allCategories)
  }, [])

  return (
    <div className='CategoryFilter' >
      {rarity.map((rarityName, index) => (
        <div key={index} 
        className={`RarityDiv${filter.includes(rarityName) ? ' True' : ''}`} 
        onClick={() => {
          if ( filter.includes(rarityName) ){
            let newFilter = filter.filter(filterElement => filterElement !== rarityName)

            setFilter(newFilter)
          } else {
            setFilter(filter.concat(rarityName))
          }
        }}>
          <img src={`./ItemFrames/Rarity_${rarityName}_bg.png`} alt={rarityName} />
          <h3 className='RarityTitle'>{rarityName}</h3>
        </div>
      ))}
      {category.map((categoryItem, index) => (
        <div key={index} className={`RarityDiv${filter.includes(categoryItem) ? ' True' : ''}`}
        onClick={() => {
                if ( filter.includes(categoryItem) ){
                  let newFilter = filter.filter(filterElement => filterElement !== categoryItem)

                  setFilter(newFilter)
                } else {
                  setFilter(filter.concat(categoryItem))
                }
              }}
        >
          <img className='CategoryImg' src={`./Icons/category/${categoryItem.replace(/\//g, "&")}.png`} alt={categoryItem}/>
          <h3 className='RarityTitle'>{categoryItem}</h3>
        </div>
      ))}
    </div>
  )
}

export default CategoryFilter