
import ItemsList from '../Data/ItemsList.json'
import ItemsListPT from '../Data/ItemsListPT.json'

const handleLanguage = (language) => {
    if (language === "EN") return ItemsList
    if (language === "PT-BR") return ItemsListPT
    else return
}

export default handleLanguage