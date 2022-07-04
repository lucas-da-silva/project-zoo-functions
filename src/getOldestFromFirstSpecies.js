const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employ) => employ.id === id).responsibleFor[0];
  const { residents } = species.find((specie) => specie.id === employee);
  const oldest = residents.reduce((max, { age }) => (age > max ? age : max), 0);
  const { name, sex, age } = residents.find(({ age }) => age === oldest);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
