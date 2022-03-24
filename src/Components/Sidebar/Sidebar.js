import React, { useState } from "react";

// import handleMap from '../../Utils/classSelectHandler.js'
import itemsList from '../../Data/ItemsList.json'

import Classes from "./Classes";
import ItemUi from "./ItemUi";

import "./Sidebar.css";

const Sidebar = ({ filter, inventory, inventoryContent, setInventoryContent, itemClass, setItemClass, icon, setIcon }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="ItemList">
      <Classes itemClass={itemClass} setItemClass={setItemClass} />
      <div className="SearchContainer">
        <input
          className="SearchBar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="ItemDisplay">
        {itemsList.map((itemInfo, index) => {
          const { name, image, category, rarity, recipe,  tier, imageSecondary, names, images } = itemInfo;

          let nameSet
          let imageSet
          
          if ( !name ) {
            nameSet = names[`name${itemClass}`]
            imageSet = images[`image${itemClass}`]
          }


          return (
           ( name ?
            name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
              : 
            nameSet?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
           ) && filter.includes(category) && filter.includes(rarity) && (
              <ItemUi
                key={index}
                index={index}
                name={name}
                image={image}
                imageS={imageSecondary}
                category={category}
                rarity={rarity}
                recipe={recipe}
                filter={filter}
                tier={tier}
                inventory={inventory}
                inventoryContent={inventoryContent}
                setInventoryContent={setInventoryContent}
                icon={icon}
                nameSet={nameSet}
                imageSet={imageSet}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
