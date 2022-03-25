const checkValue = (oldValue, minValue, maxValue) => {
    let value = oldValue;
    if (value < minValue) value = minValue
    else if (value > maxValue) value = maxValue
    else if (!value) value = undefined
    return value;
}

export default checkValue