import React, { useContext, useState } from "react";

export const RecipeContext = React.createContext();
export const RecipeUpdateContext = React.createContext();

export const useRecipe = () => {
    return useContext(RecipeContext)
}

export const useRecipeUpdate = () => {
    return useContext(RecipeUpdateContext)
}

export const AcessRecipeContext = ({ children }) => {
    const [recipe, setRecipe] = useState(() => [])
 
    return (
        <RecipeContext.Provider value={recipe}>
            <RecipeUpdateContext.Provider value={setRecipe}>
                { children }
            </RecipeUpdateContext.Provider>
        </RecipeContext.Provider>
    )
}