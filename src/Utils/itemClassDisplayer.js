export const nameHandler = itemClass => {
    if ( itemClass === 0) return "nameArbalist"
    else if ( itemClass === 1) return "nameLancer"
    else if ( itemClass === 2) return "nameSorcerer"
    else if ( itemClass === 3) return "nameTaoist"
    else if ( itemClass === 4) return "nameWarrior"
    else return
}

export const imageHandler = itemClass => {
    if ( itemClass === 0) return "imageArbalist"
    else if ( itemClass === 1) return "imageLancer"
    else if ( itemClass === 2) return "imageSorcerer"
    else if ( itemClass === 3) return "imageTaoist"
    else if ( itemClass === 4) return "imageWarrior"
    else return
}