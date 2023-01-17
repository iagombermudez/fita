import axios from "axios";

const baseUrl = "https://localhost:5001/api/users/";

export const login = async (credentials: string) => {
  const { data } = await axios.post(baseUrl + "authenticate", credentials);
  return data;
};
