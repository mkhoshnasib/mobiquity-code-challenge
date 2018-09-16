import { fetchRaceResult } from './winnersActions';

describe('Winners actions', () => {
  it('Fetches a season winners', () => {
    return fetchRaceResult(2005, 'alonso').then(x => expect(typeof x)
      .toEqual('object'));
  });
  it('Fetched object has expected data', () => {
    return fetchRaceResult(2005, 'alonso').then(x => expect(JSON.stringify(Object.keys(x[0]).sort()))
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
          raceName: "",
          round: "",
          circuitName: "",
          isDriverWorldChampion: "",
          season: "",
        }
      ).sort())));
  });
  it('Correctly throw error', () => {
    return fetchRaceResult('dummy year').catch(x => expect(x.status)
      .toEqual(400));
  });
});