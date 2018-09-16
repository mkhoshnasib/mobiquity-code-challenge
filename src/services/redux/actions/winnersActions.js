import httpClient from '../../http/http-client/http-client';
import { FETCH_WINNERS } from './types';

/** collects useful data from API response */
const collectData = (response, worldChampionId) => ({
  raceName: response.raceName,
  round: response.round,
  circuitName: response.Circuit.circuitName,
  driver: response.Results[0].Driver,
  isDriverWorldChampion: response.Results[0].Driver.driverId === worldChampionId,
  constructor: response.Results[0].Constructor,
  season: response.season,
});

/** fetches season winners of every race */
export const fetchRaceResult = (season, worldChampionId) => httpClient.getCall(`/${season}/results/1.json`)
  .then(res => res.data.MRData.RaceTable.Races.map(x => collectData(x, worldChampionId)))
  .catch(error => console.error(`An error occurred on fetching winners every race in season '${season}'`, error.status));


/** dispatches fetched winners to reducer */
export const fetchWinners = (season, worldChampionId) => (dispatch) => {
  fetchRaceResult(season, worldChampionId).then(res => dispatch({
    type: FETCH_WINNERS,
    payload: res,
  }));
};
