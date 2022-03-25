const nameShortener = (name) => {
    let shortSet;

    if ( name.length > 25 ) {
        shortSet = name.replace(/(\w+\/\w+ (de|do|da)\s+)/gi, '')
        if ( shortSet.length > 25 ) shortSet = shortSet.replace(/((Traje|Uniforme|Outfit|Uniform)\s+|(\w+\/\w+))/gi, '')

        return shortSet
    } else {
        shortSet = name
        return shortSet
    }
}

export default nameShortener