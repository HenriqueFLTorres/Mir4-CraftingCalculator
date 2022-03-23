import React, { useState, useEffect } from 'react'
import Backpack from './SVG/Icons/Backpack'
import ItemsList from '../Data/ItemsList.json'

import './BackpackMenu.css'
import BPItem from './BPItem'
import DefaultItems from './DefaultItems'

const BackpackMenu = ({ inventory, setInventory, inventoryContent, myBackpack, icon, itemClass }) => {
  const [refresh, setRefresh] = useState(0)

  let parsed = JSON.parse(localStorage.getItem("Backpack"))

  useEffect(() => {
    parsed = JSON.parse(localStorage.getItem("Backpack"))
  }, [myBackpack])

  return (
    <div className="BackpackMenu" onClick={() => setRefresh(refresh + 1)}>
        <div className={`BackpackButton${inventory ? ' Active' : ''}`} onClick={() => setInventory(!inventory)}>
        <Backpack/>
        </div>
        <div className={`BackpackArea${inventory ? ' Active' : ''}`}>
            <DefaultItems myBackpack={myBackpack}/>
            { ItemsList.map((item, index) => {
                const { name, image, category, rarity, tier, imageSecondary, names, images } = item

                let itemName = name
                let nameSet
                let imageSet
                
                if ( !name ) {
                  itemName = names[`name${itemClass}`]
                  nameSet = names[`name${itemClass}`]
                  imageSet = images[`image${itemClass}`]
                }
                 
                return ( inventoryContent.includes(index) || parsed?.hasOwnProperty(name) ) && <BPItem key={index} name={itemName} image={image} rarity={rarity} tier={tier} myBackpack={myBackpack} inventoryContent={inventoryContent} index={index} imageS={imageSecondary} nameSet={nameSet} imageSet={imageSet} icon={icon} itemClass={itemClass} />
            }) }
        </div>
    </div>
  )
}

export default BackpackMenu