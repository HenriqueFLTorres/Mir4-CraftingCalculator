
import ItemsListArbalist from '../Data/ItemsListArbalist.json'
import ItemsListLancer from '../Data/ItemsListLancer.json'
import ItemsListSorcerer from '../Data/ItemsListSorcerer.json'
import ItemsListTaoist from '../Data/ItemsListTaoist.json'
import ItemsListWarrior from '../Data/ItemsListWarrior.json'

const handleMap = (className) => {
    if (className === "Arbalist") return ItemsListArbalist
    if (className === "Lancer") return ItemsListLancer
    if (className === "Sorcerer") return ItemsListSorcerer
    if (className === "Taoist") return ItemsListTaoist
    if (className === "Warrior") return ItemsListWarrior
    else return
}

export default handleMap