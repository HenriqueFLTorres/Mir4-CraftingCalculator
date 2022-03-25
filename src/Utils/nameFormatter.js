
// A simple function to 
// replace rarity name with ''
// replace tags with ''
// remove any space and replace with '_'

const nameFormatter = (originalName) => {
    let nameFiltered = originalName.replace(/(common\s+)|(uncommon\s+)|(rare\s+)|(epic\s+)|(legendary\s+)|(\s+comum)|(\s+incomum)|(\s+raro)|(\s+épico)|(\s+lendário)|(\s+rara)|(\s+épica)|(\s+lendária)/gi, '')
    nameFiltered = nameFiltered.replace(/(\[\w+\]\s)/g, '')
    nameFiltered = nameFiltered.replace(/\s/g, '_')
    return nameFiltered
}

export default nameFormatter