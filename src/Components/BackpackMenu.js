import React, { useState, useEffect } from 'react'
import Backpack from './SVG/Icons/Backpack'
import ItemsList from '../Data/ItemsList.json'

import './BackpackMenu.css'
import BPItem from './BPItem'

const BackpackMenu = ({ inventory, setInventory, inventoryContent, myBackpack }) => {


  let parsed = JSON.parse(localStorage.getItem("Backpack"))

  return (
    <div className="BackpackMenu">
        <div className={`BackpackButton${inventory ? ' Active' : ''}`} onClick={() => setInventory(!inventory)}>
        <Backpack/>
        </div>
        <div className={`BackpackArea${inventory ? ' Active' : ''}`}>
            { ItemsList.map((item, index) => {
                const { name, image, category, rarity, tier } = item
                 
                return ( inventoryContent.includes(index) || parsed?.hasOwnProperty(name) ) && <BPItem key={index} name={name} image={image} category={category} rarity={rarity} tier={tier} myBackpack={myBackpack} inventoryContent={inventoryContent} index={index} />
            }) }
        </div>
    </div>
  )
}

export default BackpackMenu