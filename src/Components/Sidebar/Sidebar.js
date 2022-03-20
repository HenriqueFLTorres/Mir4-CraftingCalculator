import React, { useState } from "react";
import ItensList from "../../Data/ItemsList.json";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ItemUi from "./ItemUi";

import "./Sidebar.css";

const Sidebar = ({ filter }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="ItemList">
      <div className="SearchContainer">
        <input
          className="SearchBar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="ItemDisplay">
        {ItensList.map((itemInfo, index) => {
          const { name, image, category, rarity, recipe } = itemInfo;

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
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
