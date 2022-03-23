import React, { useEffect, useState } from 'react'
import checkValue from '../../Utils/checkValue'
import { useRecipe, useRecipeUpdate } from '../Hooks/AcessRecipeContext'
import { useSelect, useSelectUpdate } from '../Hooks/SelectedContext'

import Arrow from '../SVG/Icons/Arrow'
import './ItemSettings.css'
import RecipeItem from './RecipeItem'

let recipeInfo = []


const ItemConfigUI = ({ name, image, rarity, recipe, index, tier, nameSet, imageSet, icon, imageS }) => {
    const [value, setValue] = useState(1)

    const selected = useSelect();
    const selectedUpdate = useSelectUpdate();

    const recipeValue = useRecipe();
    const recipeUpdate = useRecipeUpdate();
    
    useEffect(() => {
        
        let recipeSelector = document.querySelectorAll(".RecipeItem")
        if (recipeSelector) {
            recipeSelector.forEach((item) => { 

                let dataContent = item.dataset.content
                return recipeInfo.push({ ["name"]: item.firstChild.innerText, ["value"]: Number(dataContent) 
                
              })})
              
              recipeUpdate(recipeInfo)
              recipeInfo = [] 
        } else {
            recipeUpdate([])
        }
        

    }, [value, selected])


  return (
    <div className='ItemConfigUI'>

        <div className='ItemSettingsUI'>
            <div 
                className='ISFrame' 
                onClick={() => selectedUpdate(selected.filter(indexNumber => indexNumber != index))} 
                style={{ backgroundImage: `url(./ItemFrames/Rarity_${rarity}_bg.png)` }} >
                    {  
                        imageSet ?
                        // Checks if the imageSet has more than one image and displays it
                       ( imageSet.length > 1 ? ( icon ? <img src={imageSet[0]} alt={nameSet} /> : <img src={imageSet[1]} alt={nameSet} /> )
                        :
                        <img src={imageSet} alt={nameSet} /> )
                        :
                        // If the item is the same for all classes, it's only shown a global image
                        ( imageS ?
                        ( icon ? <img src={imageS[0]} alt={name} /> : <img src={imageS[1]} alt={name} /> ) :
                        <img src={image} alt={name} /> ) 
                    }
                { tier ? <img className='Tier' src={`./Icons/tier${tier}.png`} alt={`tier ${tier}`} /> : <img className='Tier' src={`./Icons/tierHide.png`} alt={`no Tier`} /> }
            </div>
            <div className='ISName'>{name ? name : nameSet}</div>
            <div className={`ISRarity ${rarity}`}>{rarity}</div>
        </div>

        <div className='ValueChanger'>
            <Arrow className="Arrow Down" onClick={() => setValue((oldValue) => checkValue(oldValue - 1, 0, 1000))}/>
            <input id={`InputNumber${index}`} type="number" value={value} onChange={(e) => setValue(checkValue(e.target.value))} />
            <Arrow className="Arrow UP" onClick={() => setValue((oldValue) => checkValue(oldValue + 1, 0, 1000))}/>
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