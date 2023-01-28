import axios from "axios";
import { IExercise } from "../common/classes/Exercise";

const baseUrl = "https://localhost:5001/api/exercises/";
const client = axios.create({
  baseURL: baseUrl,
});

export async function getAllExercises(): Promise<IExercise[]> {
  return await client.get<IExercise[]>("").then((response) => {
    return response.data;
  });
}

export async function addExercise(exercise: IExercise) {
  return await client.post("", exercise);
}
