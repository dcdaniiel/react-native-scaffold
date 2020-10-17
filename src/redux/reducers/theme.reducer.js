import { actionTypes } from '../actions';
import { updateObject } from '../../shared/utils';

const initialState = {
  theme: 'light',
};

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return updateObject(state, {});
    default:
      return state;
  }
}
