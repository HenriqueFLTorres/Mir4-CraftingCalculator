const recipeBGColor = ( itemName ) => {
    let backgroundColor;

    if ( itemName.match( /(\[\C\])/ ) ) {
        backgroundColor = "linear-gradient(180deg, rgba(57,61,62,1) 0%, rgba(107,120,126,1) 100%)"
    } else if ( itemName.match( /(\[UC\])/ ) ) {
        backgroundColor = "linear-gradient(180deg, rgba(19,58,43,1) 0%, rgba(48,139,104,1) 100%)"
    } else if ( itemName.match( /(\[R\])/ ) ) {
        backgroundColor = "linear-gradient(180deg, rgba(16,42,67,1) 0%, rgba(40,86,150,1) 100%)"
    } else if ( itemName.match( /(\[E\])/ ) ) {
        backgroundColor = "linear-gradient(180deg, rgba(48,5,16,1) 0%, rgba(168,33,31,1) 100%)"
    } else if ( itemName.match( /(\[L\])/ ) ) {
        backgroundColor = "linear-gradient(180deg, rgba(111,74,4,1) 0%, rgba(213,190,23,1) 100%)"
    }

    return backgroundColor
}

export default recipeBGColor