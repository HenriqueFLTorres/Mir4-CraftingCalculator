import React, { useState } from 'react'

import './RecipeResult.css'
import { useRecipe } from '../Hooks/AcessRecipeContext'

import recipeSum from '../../Utils/recipeSum.js'
import millify from 'millify'
import nameFormatter from '../../Utils/nameFormatter'
import recipeBGColor from '../../Utils/recipeBGColor'

const RecipeResult = () => {

  const recipeInfo = useRecipe();
  let recipe = recipeInfo;
  let result = recipeSum(recipe)


  return (
    <div className='RecipeResult'>
      <div className='RRTip'>Hover on items for precise numbers</div>
      <div className='ResultList'>
        {result?.map((item, index) => {

            let fancyAmount = item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            let bakedName = nameFormatter(item.name)

            let backgroundColor = recipeBGColor(item.name)


          return (
            <div className={`RecipeCounter`} key={index} data-content={fancyAmount} >
                <div className='RCFrame' style={{ background: backgroundColor }}>
                  <img className='RCImage' src={`./Icons/${bakedName}.png`} alt={item.name} />
                </div>
                <h3 className='RCName'>{item.name}</h3>
                <h1 className='RCValue'>{millify(item.value)}</h1>
            </div>
          )
        })}      
      </div>

    </div>
  )
}

export default RecipeResult