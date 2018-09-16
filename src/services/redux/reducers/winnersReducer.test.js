import winnersReducer from './winnersReducer';
import { FETCH_WINNERS } from '../actions/types';

describe('Winners reducer', () => {
  it('Has a default state', () => {
    expect(winnersReducer(undefined, {type: 'unexpected'}))
      .toEqual({
        items: [],
      })
  });
  it('Can handle FETCH_WINNERS', () => {
    expect(winnersReducer(undefined, {
      type: FETCH_WINNERS,
      payload: [{item1: 'item1'}],
    }))
      .toEqual({
        items: [{item1: 'item1'}],
      })
  });
  it('Can handle FETCH_WINNERS when old state exists', () => {
    expect(winnersReducer({
      items: [{item1: 'item1'}]
    }, {
      type: FETCH_WINNERS,
      payload: [{item2: 'item2'}],
    }))
      .toEqual({
        items: [{item2: 'item2'}],
      })
  });
});