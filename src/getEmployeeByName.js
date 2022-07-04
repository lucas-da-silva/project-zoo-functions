const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  if (name === undefined) {
    return {};
  }
  const { employees } = data;
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
}

module.exports = getEmployeeByName;
