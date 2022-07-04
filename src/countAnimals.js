const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  const object = {};
  if (animal === undefined) {
    species.forEach(({ name, residents }) => {
      object[name] = residents.length;
    });
    return object;
  }
  const { residents } = species.find(({ name }) => name === animal.specie);
  if (animal.sex) {
    return residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
