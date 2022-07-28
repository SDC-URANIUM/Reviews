const create = require('./create.js');
const deleteTable = require('./delete.js');

const example = async function() {
  await deleteTable.example();
  await create.example();
}

module.exports = {
  example
}

// example();