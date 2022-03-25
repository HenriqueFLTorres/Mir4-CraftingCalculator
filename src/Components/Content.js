import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ItemSettings from './ItemSettings/ItemSettings.js'
import CategoryFilter from './CategoryFilter/CategoryFilter.js';
import RecipeResult from './RecipeResult/RecipeResult.js'

import './Content.css'
import { SelectAndUpdateContext } from './Hooks/SelectedContext';
import { AcessRecipeContext } from './Hooks/AcessRecipeContext';
import Arrow from './SVG/Icons/Arrow';
import BackpackMenu from './BackpackMenu';

let myBackpack = {"Copper Coin": 0, "Dark Steel": 0, "Energy": 0};

export const Content = ({ language }) => {
  const [filter, setFilter] = useState([''])
  const [colapse, setColapse] = useState(false)
  const [itemClass, setItemClass] = useState(null)
  const [icon, setIcon] = useState(false)

  const [inventory, setInventory] = useState(false)
  const [inventoryContent, setInventoryContent] = useState([])

  setTimeout(() => {
    setIcon(!icon)
  }, 2000);
  
  
  useEffect(() => {

    if ( localStorage.getItem("Backpack") === null ) {
      localStorage.setItem("Backpack", JSON.stringify(myBackpack))
    }

    let storageBP = localStorage.getItem("Backpack")
    storageBP && ( myBackpack = JSON.parse(storageBP) )
  }, [])


  useEffect(() => {
    localStorage.setItem("Language", language)
  }, [language])
  
  

  return (
    <div className={`ContentArea${colapse ? ' Expand' : ''}`}>
      <SelectAndUpdateContext>
          <AcessRecipeContext>
            <div className='ColapseButtom' onClick={() => setColapse(!colapse) }>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
            </div>
            <Sidebar filter={filter} inventory={inventory} inventoryContent={inventoryContent} setInventoryContent={setInventoryContent} setItemClass={setItemClass} itemClass={itemClass} icon={icon} language={language} />
            <CategoryFilter filter={filter} setFilter={setFilter} language={language}/>
            <ItemSettings itemClass={itemClass} icon={icon} setIcon={setIcon} language={language}/>
            <RecipeResult language={language} />
            <BackpackMenu inventory={inventory} setInventory={setInventory} inventoryContent={inventoryContent} myBackpack={myBackpack} icon={icon} itemClass={itemClass} language={language} />
          </AcessRecipeContext>
      </SelectAndUpdateContext>
    </div>
  )
}
