import constants from './constants';

test('Ergast developer API is defined', () => {
  expect(constants.endpointUrl).toBe('http://ergast.com/api');
});
