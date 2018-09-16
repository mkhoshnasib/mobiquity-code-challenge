import httpClient from '../../http/http-client/http-client';
import { FETCH_CHAMPIONS } from './types';

/** collects useful data from API response */
const collectData = response => ({
  season: response.season,
  points: response.StandingsLists[0].DriverStandings[0].points,
  wins: response.StandingsLists[0].DriverStandings[0].wins,
  constructor: response.StandingsLists[0].DriverStandings[0].Constructors[0],
  driver: response.StandingsLists[0].DriverStandings[0].Driver,
});

/** fetches a season champion */
export const fetchChampion = season => httpClient.getCall(`/${season}/driverStandings/1.json`)
  .then(res => collectData(res.data.MRData.StandingsTable))
  .catch(error => console.error(`An error occurred on fetching world champion of season '${season}'`, error.status));

/** dispatches fetched champions to reducer */
export const fetchChampions = seasons => (dispatch) => {
  seasons.forEach(x => fetchChampion(x).then(res => dispatch({
    type: FETCH_CHAMPIONS,
    payload: res,
  })));
};
