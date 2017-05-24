// @flow
import moment from 'moment';

import type { Address } from './types';

export function formatTime(date: string, hasSeconds: boolean = true): any {
  if (!hasSeconds) {
    return moment(date).format('LT');
  }

  return moment(date).format('LTS');
}

export function formatAddress(address: Address): string {
  let addressString: string = `${address.street_address}, ${address.city}, ${address.state_region}, ${address.postal_area}`;
  return addressString;
}
