const checkValue = (oldValue, minValue, maxValue) => {
    let value = oldValue;
    if (value < minValue) value = minValue
    else if (value > maxValue) value = maxValue
    return value;
}

export default checkValue