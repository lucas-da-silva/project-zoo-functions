const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parameter is count returns 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('parameter is names returns an array that contains Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('parameter is averageAge returns approximately 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('parameter is location returns NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('parameter is popularity returns a number equal or greater 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('parameter is availability returns an array of weekdays without Monday', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });
  it('without parameter return undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('parameter is {} return a string Parâmetro inválido, é necessário uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants({})).toBe(expected);
  });
  it('parameter is a string that does not include a functionality must return null', () => {
    expect(handlerElephants('nothing')).toBeNull();
  });
});
