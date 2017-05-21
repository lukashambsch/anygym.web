// @flow
import { TOGGLE_MENU, CLOSE_MENU } from './actions';

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
    case CLOSE_MENU:
      return Object.assign({}, state, {
        isMenuVisible: false
      });
    default:
      return state;
  }
};

export default nav;
