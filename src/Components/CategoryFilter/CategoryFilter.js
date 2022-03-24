import React, { useEffect } from 'react';
import './CategoryFilter.css';

import ItemsList from '../../Data/ItemsList.json'
import handleLanguage from '../../Utils/handleLanguage';


let allCategories = []


const CategoryFilter = ({ filter, setFilter, language }) => {

  let langReturn = handleLanguage(language)

  let rarity = Array.from(new Set(langReturn.map((item, index) => langReturn[index].rarity)))
  let category = Array.from(new Set(langReturn.map((item, index) => langReturn[index].category)))

  useEffect(() => {
    filter.length === 0 && setFilter(allCategories)
  }, [filter])

  useEffect(() => {

    rarity.map((item) => allCategories.push(item) )
    category.map((item) => allCategories.push(item) )

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