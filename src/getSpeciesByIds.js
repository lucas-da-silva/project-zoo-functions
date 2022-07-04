const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const array = [];
  const { species } = data;
  ids.forEach((id) => {
    array.push(species.filter((specie) => specie.id === id)[0]);
  });
  return array;
}

module.exports = getSpeciesByIds;
