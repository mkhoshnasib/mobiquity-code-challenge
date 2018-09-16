import { FETCH_WINNERS } from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WINNERS: return {
      ...state,
      items: action.payload,
    };
    default: return state;
  }
}
