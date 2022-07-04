const data = require('../data/zoo_data');

const { species } = data;
const positions = ['NE', 'NW', 'SE', 'SW'];

function allLocationAnimals() {
  const object = {};
  positions.forEach((position) => {
    const locus = species.filter(({ location }) => location === position).map(({ name }) => name);
    object[position] = locus;
  });
  return object;
}

function includesNamesTrue(boolean) {
  const object = {};
  positions.forEach((position) => {
    const animals = species.filter(({ location }) => location === position);
    const array = [];
    animals.forEach(({ name, residents }) => {
      if (boolean === true) {
        const objectName = { [name]: residents.map((resident) => resident.name).sort() };
        array.push(objectName);
      } else {
        const objectName = { [name]: residents.map((resident) => resident.name) };
        array.push(objectName);
      }
    });
    object[position] = array;
  });
  return object;
}

function sexTrue(sex, boolean) {
  const object = {};
  positions.forEach((position) => {
    const animals = species.filter(({ location }) => location === position);
    const array = [];
    animals.forEach(({ name, residents }) => {
      const resi = residents.filter((resident) => resident.sex === sex);
      if (boolean === true) {
        const objectName = { [name]: resi.map((animal) => animal.name).sort() };
        array.push(objectName);
      } else {
        const objectName = { [name]: resi.map((animal) => animal.name) };
        array.push(objectName);
      }
    });
    object[position] = array;
  });
  return object;
}

function verifyOptions(options) {
  if (options.sex && options.includeNames === undefined) {
    return allLocationAnimals();
  }
  if (options.sorted === true) {
    return includesNamesTrue(true);
  }
  if (options.includeNames === true) {
    return includesNamesTrue();
  }
}

function verifySex(options) {
  if (options.includeNames === true && options.sorted === true) {
    return sexTrue(options.sex, true);
  }
  if (options.includeNames === true) {
    return sexTrue(options.sex);
  }
}

function getAnimalMap(options) {
  if (options === undefined) {
    return allLocationAnimals();
  }
  const verified = verifyOptions(options);
  if (options.sex !== undefined) {
    const verifiedSex = verifySex(options);
    if (verifiedSex !== undefined) {
      return verifiedSex;
    }
  }
  if (verified !== undefined) {
    return verified;
  }
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
