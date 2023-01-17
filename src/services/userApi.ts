import axios, { AxiosResponse } from "axios";
import { IUser, LoginCredentials } from "../common/types";

const baseUrl = "https://localhost:5001/api/users/";
const client = axios.create({
  baseURL: baseUrl,
});

export async function login(credentials: LoginCredentials) {
  const response = await client
    .post("authenticate", credentials)
    .catch((error) => {
      console.log(error);
    });
  return response;
}
