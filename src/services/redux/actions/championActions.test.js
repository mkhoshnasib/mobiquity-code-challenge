import { fetchChampion } from './championActions';

describe('Champions actions', () => {
  it('Fetches a season champion', () => {
    return fetchChampion(2005).then(x => expect(typeof x)
      .toEqual('object'));
  });
  it('Fetched object has expected data', () => {
    return fetchChampion(2005).then(x => expect(JSON.stringify(Object.keys(x).sort()))
      .toEqual(JSON.stringify(Object.keys(
        {
          constructor: {
            constructorId: "",
            name: "",
            nationality: "",
            url: ""
          },
          driver: {
            code: "",
            dateOfBirth: "",
            driverId: "",
            familyName: "",
            givenName: "",
            nationality: "",
            permanentNumber: "",
            url: ""
          },
          points: "",
          season: "",
          wins: ""
        }
      ).sort())));
  });
  it('Correctly throw error', () => {
    return fetchChampion('dummy year').catch(x => expect(x.status)
      .toEqual(400));
  });
});