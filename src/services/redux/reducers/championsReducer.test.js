import championsReducer from './championsReducer';
import { FETCH_CHAMPIONS } from '../actions/types';

describe('Champions reducer', () => {
  it('Has a default state', () => {
    expect(championsReducer(undefined, {type: 'unexpected'}))
      .toEqual({
        items: [],
      })
  });
  it('Can handle FETCH_CHAMPIONS', () => {
    expect(championsReducer(undefined, {
      type: FETCH_CHAMPIONS,
      payload: {item1: 'item1'}
    }))
      .toEqual({
        items: [{item1: 'item1'}],
      })
  });
  it('Can handle FETCH_CHAMPIONS when old state exists', () => {
    expect(championsReducer({
      items: [{item1: 'item1'}],
    }, {
      type: FETCH_CHAMPIONS,
      payload: {item2: 'item2'},
    }))
      .toEqual({
        items: [
          {item1: 'item1'},
          {item2: 'item2'},
        ],
      })
  });
});