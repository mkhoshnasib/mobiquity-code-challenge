import { FETCH_CHAMPIONS } from '../actions/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHAMPIONS: return {
      ...state,
      items: [...state.items, action.payload],
    };
    default: return state;
  }
}
