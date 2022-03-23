import React, { useState } from "react";

import handleMap from '../../Utils/classSelectHandler.js'

import Classes from "./Classes";
import ItemUi from "./ItemUi";

import "./Sidebar.css";

const Sidebar = ({ filter, inventory, inventoryContent, setInventoryContent, itemClass, setItemClass }) => {
  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState(false)

  setTimeout(() => {
    setIcon(!icon)
  }, 1000);

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
        {handleMap(itemClass).map((itemInfo, index) => {
          const { name, image, category, rarity, recipe,  tier, imageSecondary } = itemInfo;

          return (
            name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
            filter.includes(category) && filter.includes(rarity) && (
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
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
