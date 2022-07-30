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

module.exports = {
  columns,
  values
}
