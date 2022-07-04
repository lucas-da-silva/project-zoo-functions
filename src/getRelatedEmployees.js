const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const functionarios = employees.filter(({ managers }) => managers.includes(managerId));
  return functionarios.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
