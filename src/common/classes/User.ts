import { IUser } from "../types";

export class User implements IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  token: string;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    token: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.token = token;
  }
}
