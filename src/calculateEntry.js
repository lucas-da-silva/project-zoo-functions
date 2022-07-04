const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter(({ age }) => age < 18).length;
  const adults = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniors = entrants.filter(({ age }) => age >= 50).length;
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (entrants === undefined || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
