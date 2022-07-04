const data = require('../data/zoo_data');

const { employees } = data;

function getPerson(string) {
  const firstName = employees.find((employee) => employee.firstName === string);
  if (firstName !== undefined) {
    return firstName;
  }
  const lastName = employees.find((employee) => employee.lastName === string);
  if (lastName !== undefined) {
    return lastName;
  }
  const id = employees.find((employee) => employee.id === string);
  if (id !== undefined) {
    return id;
  }
  throw new Error('Informações inválidas');
}

function getSpecies(animals) {
  const array = [];
  animals.forEach((animal) => {
    array.push(data.species.find(({ id }) => id === animal).name);
  });
  return array;
}

function getLocation(animals) {
  const species = getSpecies(animals);
  const array = [];
  species.forEach((specie) => {
    array.push(data.species.find(({ name }) => name === specie).location);
  });
  return array;
}

function getObject(person) {
  const { firstName, lastName, responsibleFor } = person;
  const employee = { id: person.id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocation(responsibleFor),
  };
  return employee;
}

function getAllEmployees() {
  const array = [];
  employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    const object = { id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor),
      locations: getLocation(responsibleFor),
    };
    array.push(object);
  });
  return array;
}

function getEmployeesCoverage(object) {
  if (object === undefined) {
    return getAllEmployees();
  }
  if (object.name) {
    const person = getPerson(object.name);
    return getObject(person);
  }
  if (object.id) {
    const person = getPerson(object.id);
    return getObject(person);
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
