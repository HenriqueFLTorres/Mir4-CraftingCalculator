const backpackCalcDetector = (inventory, selected, index, updateSelected, inventoryContent, setInventoryContent) => {
    if ( !inventory ) {
        if ( selected.includes(index) ) {
          updateSelected(selected.filter(indexNumber => indexNumber !== index))
        } else {
          updateSelected(selected.concat(index))
        }
      } else {
        if ( inventoryContent.includes(index) ) {
          let newList = inventoryContent.filter((indexNumber) => indexNumber !== index)
          setInventoryContent(newList)
        }  else {
          setInventoryContent(inventoryContent.concat(index))
        }
      }
}

export default backpackCalcDetector