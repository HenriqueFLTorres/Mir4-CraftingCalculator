import React, { useState } from "react";

// import handleMap from '../../Utils/classSelectHandler.js'
import itemsListPT from '../../Data/ItemsListPT.json'
import handleLanguage from "../../Utils/handleLanguage";
import { nameHandler, imageHandler } from "../../Utils/itemClassDisplayer";

import Classes from "./Classes";
import ItemUi from "./ItemUi";

import "./Sidebar.css";

const Sidebar = ({ filter, inventory, inventoryContent, setInventoryContent, itemClass, setItemClass, icon, language }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="ItemList">
      <Classes itemClass={itemClass} setItemClass={setItemClass} language={language} />
      <div className="SearchContainer">
        <input
          className="SearchBar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="ItemDisplay">
        {handleLanguage(language).map((itemInfo, index) => {
          const { name, image, category, rarity, recipe,  tier, imageSecondary, names, images } = itemInfo;

          let nameSet
          let imageSet

          
          if ( !name ) {
            nameSet = names[nameHandler(itemClass)]
            imageSet = images[imageHandler(itemClass)]
          }

          return (
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
                nameSet={nameSet}
                imageSet={imageSet}
                language={language}
              />
            )
        );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
