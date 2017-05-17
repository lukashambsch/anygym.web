// @flow
import { TOGGLE_MENU } from './actions';

type State = {
  isMenuVisible: boolean;
};

export const initialState: State = {
  isMenuVisible: false
};

const nav = (state: State = initialState, action: Object) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        isMenuVisible: !state.isMenuVisible
      });
    default:
      return state;
  }
};

export default nav;
