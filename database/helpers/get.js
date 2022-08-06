const columns = function (keys) {
  let columnConstructor = '(';
  for (key of keys) {
    columnConstructor += key + ', ';
  }

  const columns = columnConstructor.slice(0, columnConstructor.length - 2) + ')';
  return columns;
}

const values = function (extractedValues) {

  let valueConstructor = '(';
  for (const value of extractedValues) {
    if (typeof value === 'string') {
      valueConstructor += "'" + value + "', ";
    } else {
      valueConstructor += value + ', ';
    }
  }

  const values = valueConstructor.slice(0, valueConstructor.length - 2) + ')';
  return values;
}


const columnFromRating = function(rating) {
  switch(rating) {
    case '1':
      return 'onestar';
      break;
    case '2':
      return 'twostar';
      break;
    case '3':
      return 'threestar';
      break;
    case '4':
      return 'fourstar';
      break;
    case '5':
      return 'fivestar';
      break;
    default:
      return null;
  }
}

const averageValue = function(arrayOfObjects) {
  arrayOfObjects = arrayOfObjects || [];
  let totalValue = 0;


  for (let currentIndex = 0; currentIndex < arrayOfObjects.length; currentIndex++) {
    const currentValue = arrayOfObjects[currentIndex].value;
    totalValue += currentValue;
  }

  return totalValue / arrayOfObjects.length;
}

module.exports = {
  columns,
  values,
  columnFromRating,
  averageValue
}
