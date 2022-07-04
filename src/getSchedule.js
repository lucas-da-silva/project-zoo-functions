const data = require('../data/zoo_data');

const { species, hours } = data;

function getSpecies(day) {
  const exhibition = species.filter(({ availability }) => availability.includes(day));
  return exhibition.map((animal) => animal.name);
}

function getAllDays() {
  const object = {};
  const daysOfWeek = Object.keys(hours);
  daysOfWeek.forEach((day) => {
    if (day === 'Monday') {
      object.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      object[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getSpecies(day),
      };
    }
  });
  return object;
}

function getDayOfWeek(day) {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const daysOfWeek = Object.keys(hours);
  if (daysOfWeek.includes(day)) {
    return { [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getSpecies(day),
    },
    };
  }
  return day;
}

function getSchedule(scheduleTarget) {
  const dayWeek = getDayOfWeek(scheduleTarget);
  if (typeof dayWeek === 'object') {
    return dayWeek;
  }
  const result = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || result === undefined) {
    return getAllDays();
  }
  return result.availability;
}

module.exports = getSchedule;
