import React, { useState } from "react";
import millify from "millify";

import nameFormatter from "../../Utils/nameFormatter";

const RecipeItem = ({ name, amount, rarity }) => {
    const [onHover, setOnHover] = useState(false)

    let bakedName = nameFormatter(name)

  return (
    <div 
        className={`RecipeItem${onHover ? ' Hover' : ''}`}
        onMouseEnter={() => setOnHover(true)} 
        onMouseLeave={() => setOnHover(false)}
        data-content={amount}
    >
        <h1 className="RIName">{name}</h1>
        <div className={`RIFrame ${ rarity || ''}`}>
        <img src={`./Icons/${bakedName}.png`} alt={name} />
        </div>
        <h1 className="RIValue">
        {millify(amount)}
        </h1>
    </div>
  );
};

export default RecipeItem;
