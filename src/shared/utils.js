// @flow
import moment from 'moment';

export function formatTime(date: string) {
  return moment(date).format('LTS');
}
