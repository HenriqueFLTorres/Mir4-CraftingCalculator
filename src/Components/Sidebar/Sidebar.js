import React, { useState } from "react";

import ItemsListArbalist from '../../Data/ItemsListArbalist.json'
import ItemsListLancer from '../../Data/ItemsListLancer.json'
import ItemsListSorcerer from '../../Data/ItemsListSorcerer.json'
import ItemsListTaoist from '../../Data/ItemsListTaoist.json'
import ItemsListWarrior from '../../Data/ItemsListWarrior.json'

import Classes from "./Classes";
import ItemUi from "./ItemUi";

import "./Sidebar.css";

const Sidebar = ({ filter, inventory, inventoryContent, setInventoryContent }) => {
  const [search, setSearch] = useState("");
  const [itemClass, setItemClass] = useState("Arbalist")

  const handleMap = (className) => {
    if (className === "Arbalist") return ItemsListArbalist
    if (className === "Lancer") return ItemsListLancer
    if (className === "Sorcerer") return ItemsListSorcerer
    if (className === "Taoist") return ItemsListTaoist
    if (className === "Warrior") return ItemsListWarrior
    else return
  }

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
        {(handleMap(itemClass)).map((itemInfo, index) => {
          const { name, image, category, rarity, recipe,  tier } = itemInfo;

          return (
            name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
            filter.includes(category) && filter.includes(rarity) && (
              <ItemUi
                key={index}
                index={index}
                name={name}
                image={image}
                category={category}
                rarity={rarity}
                recipe={recipe}
                filter={filter}
                tier={tier}
                inventory={inventory}
                inventoryContent={inventoryContent}
                setInventoryContent={setInventoryContent}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
