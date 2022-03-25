import React from 'react'

import './RecipeResult.css'
import { useRecipe } from '../Hooks/AcessRecipeContext'

import recipeSum from '../../Utils/recipeSum.js'
import millify from 'millify'
import nameFormatter from '../../Utils/nameFormatter'
import recipeBGColor from '../../Utils/recipeBGColor'

const RecipeResult = ({ language }) => {
  const recipeInfo = useRecipe();
  let recipe = recipeInfo;
  let result = recipeSum(recipe)

  let parsed = JSON.parse(localStorage.getItem("Backpack"))

  return (
    <div className='RecipeResult'>
      <div className='RRTip'>Hover on items for precise numbers</div>
      <div className='ResultList'>
        {result?.map((item, index) => {

            if (parsed.hasOwnProperty(item.name)) {
              let name = item.name
              item.value -= parsed[name]
            }

            let fancyAmount = item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            let bakedName = nameFormatter(item.name)

            let backgroundColor = recipeBGColor(item.name)

          return (
            <div className={`RecipeCounter`} key={index} data-content={item.value <= 0 ? Math.abs(item.value) : fancyAmount} >
                <div className='RCFrame' style={{ background: backgroundColor }}>
                  <img className='RCImage' src={`./Icons/${language}/${bakedName}.png`} alt={item.name} />
                  { item.tier && <img className='Tier' src={`./Icons/tier${item.tier}.png`} alt={`tier ${item.tier}`} />  }
                </div>
                <h3 className='RCName'>{item.name}</h3>
                <h1 className='RCValue'>{ item.value <= 0 ? "Enough Itens" : millify(item.value)}</h1>
            </div>
          )
        })}      
      </div>

    </div>
  )
}

export default RecipeResult