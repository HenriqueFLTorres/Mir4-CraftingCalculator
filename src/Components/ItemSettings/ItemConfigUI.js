import React, { useEffect, useState } from 'react'
import { useRecipe, useRecipeUpdate } from '../Hooks/AcessRecipeContext'
import { useSelect, useSelectUpdate } from '../Hooks/SelectedContext'

import Arrow from '../SVG/Icons/Arrow'
import './ItemSettings.css'
import RecipeItem from './RecipeItem'

let recipeInfo = []


const ItemConfigUI = ({ name, image, rarity, recipe, index }) => {
    const [value, setValue] = useState(1)

    const selected = useSelect();
    const selectedUpdate = useSelectUpdate();

    const recipeValue = useRecipe();
    const recipeUpdate = useRecipeUpdate();

    const minValue = 0
    const maxValue = 1000

    const checkValue = (oldValue) => {
        let value = oldValue;
        if (value < minValue) value = minValue
        else if (value > maxValue) value = maxValue
        return value;
    }


    useEffect(() => {

        let recipeSelector = document.querySelectorAll(".RecipeItem")

        recipeSelector.forEach((item) => { 

          let dataContent = item.dataset.content
          return recipeInfo.push({ ["name"]: item.firstChild.innerText, ["value"]: Number(dataContent) 
          
        })})
        
        recipeUpdate(recipeInfo)
        recipeInfo = []


    }, [value, selected])


  return (
    <div className='ItemConfigUI'>

        <div className='ItemSettingsUI'>
            <div 
                className='ISFrame' 
                onClick={() => selectedUpdate(selected.filter(indexNumber => indexNumber != index))} 
                style={{ backgroundImage: `url(./ItemFrames/Rarity_${rarity}_bg.png)` }} >
                <img src={image} alt={name} />
            </div>
            <div className='ISName'>{name}</div>
            <div className={`ISRarity ${rarity}`}>{rarity}</div>
        </div>

        <div className='ValueChanger'>
            <Arrow className="Arrow Down" onClick={() => setValue((oldValue) => checkValue(oldValue - 1))}/>
            <input id={`InputNumber${index}`} type="number" value={value} onChange={(e) => setValue(checkValue(e.target.value))} />
            <Arrow className="Arrow UP" onClick={() => setValue((oldValue) => checkValue(oldValue + 1))}/>
        </div>

        <div className='RecipeItems'>

            {recipe.map((item, index) => {

                const { name, amount, rarity } = item
                let totalAmount = amount * value;

                return <RecipeItem key={index} name={name} amount={totalAmount} rarity={rarity} />
            })}

        </div>
    </div>  
  )
}

export default ItemConfigUI