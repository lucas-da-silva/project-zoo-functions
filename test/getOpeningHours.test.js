const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('without parameters', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('for the parameters Monday and 09:00-AM returns the string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('for the parameters Wednesday and 09:00-PM returns the string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('for the parameters Thu and 09:00-AM returns exception', () => {
    const exception = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error(exception));
  });
  it('for the parameters Friday and 09:00-ZM returns exception', () => {
    const exception = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error(exception));
  });
  it('for the parameters Saturday and C9:00-AM returns exception', () => {
    const exception = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error(exception));
  });
  it('for the parameters Sunday and 09:c0-PM returns exception', () => {
    const exception = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-PM')).toThrowError(new Error(exception));
  });
  it('for the parameters Monday and 13:00-AM returns exception', () => {
    const exception = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error(exception));
  });
  it('for the parameters Tuesday and 09:60-AM returns exception', () => {
    const exception = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error(exception));
  });
});
