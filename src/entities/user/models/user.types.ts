type User = {
  id: number;
  username: string;
  image: string;
};

type Address = {
  address: string;
  city: string;
  state: string;
};

type Company = {
  name: string;
  title: string;
};

type UserWithDetail = User & {
  firstName?: string;
  lastName?: string;
  age?: number;
  email?: string;
  phone?: string;
  address?: Address;
  company?: Company;
};

export type { User, UserWithDetail };
