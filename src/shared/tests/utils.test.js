import { formatTime } from '../utils';

describe('utils', () => {

  it('formatTime returns correct time', () => {
   const date = '2017-04-15T14:08:59.788111Z';

   expect(formatTime(date)).toEqual('7:08:59 AM');
  });

});
