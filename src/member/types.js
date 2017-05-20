import type { User } from '../auth/types';

export type Member = {
  member_id: number;
  user_id: number;
  address_id: number;
  first_name: string;
  last_name: string;

  user: User;
};
