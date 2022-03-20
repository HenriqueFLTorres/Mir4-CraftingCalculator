import React, { useContext, useState } from "react";

export const SelectContext = React.createContext();
export const SelectUpdateContext = React.createContext();

export const useSelect = () => {
    return useContext(SelectContext)
}

export const useSelectUpdate = () => {
    return useContext(SelectUpdateContext)
}

export const SelectAndUpdateContext = ({ children }) => {
    const [selected, setSelected] = useState(() => [])

    return (
        <SelectContext.Provider value={selected}>
            <SelectUpdateContext.Provider value={setSelected}>
                { children }
            </SelectUpdateContext.Provider>
        </SelectContext.Provider>
    )
}