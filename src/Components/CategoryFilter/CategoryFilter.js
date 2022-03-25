import React, { useEffect } from 'react';
import './CategoryFilter.css';
import handleLanguage from '../../Utils/handleLanguage';

let allCategories = []

let renderCount = 0;

const CategoryFilter = ({ filter, setFilter, language }) => {

  let langReturn = handleLanguage(language)

  let rarity = Array.from(new Set(langReturn.map((item, index) => langReturn[index].rarity)))
  let category = Array.from(new Set(langReturn.map((item, index) => langReturn[index].category)))

  
  useEffect(() => {
    if ( localStorage.getItem("Filters") === null ) {
      localStorage.setItem("Filters", JSON.stringify(allCategories))
    }

    let filterStorage = JSON.parse(localStorage.getItem("Filters"))
    setFilter(filterStorage)
  }, [])


  useEffect(() => {
    // Gambiarra, i need the component to render on language change EXCEPT by first time, sooooooo
    renderCount++
    if ( renderCount >= 3 ) {
      allCategories = []

      rarity.map((item) => allCategories.push(item) )
      category.map((item) => allCategories.push(item) )

      setFilter(allCategories)
      localStorage.setItem("Filters", allCategories)
    }

  }, [language])


  useEffect(() => {
    if (filter.length === 0) {
      allCategories = []

      rarity.map((item) => allCategories.push(item) )
      category.map((item) => allCategories.push(item) )

      setFilter(allCategories)
    }
    localStorage.setItem("Filters", JSON.stringify(filter))
  }, [filter])


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