import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import ItemSettings from './ItemSettings/ItemSettings.js'
import CategoryFilter from './CategoryFilter/CategoryFilter.js';
import RecipeResult from './RecipeResult/RecipeResult.js'

import './Content.css'
import { SelectAndUpdateContext, useSelect } from './Hooks/SelectedContext';
import { AcessRecipeContext } from './Hooks/AcessRecipeContext';
import Arrow from './SVG/Icons/Arrow';
import BackpackMenu from './BackpackMenu';

let myBackpack = {};

export const Content = () => {
  const [filter, setFilter] = useState([''])
  const [totalRecipe, setTotalRecipe] = useState([])
  const [colapse, setColapse] = useState(false)
  
  const [inventory, setInventory] = useState(false)
  const [inventoryContent, setInventoryContent] = useState([])
  
  useEffect(() => {
    let storageBP = localStorage.getItem("Backpack")
    storageBP && ( myBackpack = JSON.parse(storageBP) )
  }, [])
  
  

  return (
    <div className={`ContentArea${colapse ? ' Expand' : ''}`}>
      <SelectAndUpdateContext>
          <AcessRecipeContext>
            <div className='ColapseButtom' onClick={() => setColapse(!colapse) }>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
                <Arrow className="Colapse"/>
            </div>
            <Sidebar filter={filter} inventory={inventory} inventoryContent={inventoryContent} setInventoryContent={setInventoryContent}/>
            <CategoryFilter filter={filter} setFilter={setFilter}/>
            <ItemSettings/>
            <RecipeResult />
            <BackpackMenu inventory={inventory} setInventory={setInventory} inventoryContent={inventoryContent} myBackpack={myBackpack} />
          </AcessRecipeContext>
      </SelectAndUpdateContext>
    </div>
  )
}
