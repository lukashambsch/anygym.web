import type { Address } from '../shared/types';

export type BusinessHour = {
  business_hour_id: number;
  gym_location_id: number;
  holiday_id: number?;
  day_id: number?;
  open_time: string;
  close_time: string;
};

export type GymLocation = {
  gym_location_id: number;
  gym_id: number;
  address_id: number;
  location_name: string;
  phone_number: string;
  website_url: string;
  in_network: boolean;
  monthly_member_fee: number;

  address: Address;
  business_hours: BusinessHours[];
};
