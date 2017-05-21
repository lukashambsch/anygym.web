// @flow
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}

export function closeMenu() {
  return {
    type: CLOSE_MENU
  };
}
