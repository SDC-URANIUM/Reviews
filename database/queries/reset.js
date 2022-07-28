const create = require('./create.js');
const delete = require('./delete.js');

const example = async function() {
  await delete.example();
  await create.example();
}

module.exports = {
  example
}

example();