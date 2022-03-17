const recipeSum = recipeArray => {

    let itemChecker = {};

    recipeArray.forEach( recipeItem => {

    let name = recipeItem.name
    let value = recipeItem.value

    if ( !itemChecker.hasOwnProperty( name ) )  itemChecker[name] = value
    else itemChecker[name] += value

    });

    let result = [];

    for (let Object in itemChecker) {
    result.push( { name: Object, value: itemChecker[Object] } );
    }

    return result

}

export default recipeSum