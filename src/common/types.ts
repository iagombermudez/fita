export interface LoginCredentials {
  username: string;
  password: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  token: string;
}

export type AutocompleteInput = {
  label: string;
  id: number;
};
