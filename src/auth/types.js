export type User = {
  user_id: number;
  email: string;
  password: string;
  created_on?: string;
};

export type Role = {
  role_id: number;
  role_name: string;
};
