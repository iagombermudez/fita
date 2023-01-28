import { Exercise } from "./Exercise";

export interface IWorkoutExercise {
  exercise: Exercise;
  numReps: number;
}

export class WorkoutExercise implements IWorkoutExercise {
  exercise: Exercise;
  numReps: number;

  constructor(exercise: Exercise, numReps: number) {
    this.exercise = exercise;
    this.numReps = numReps;
  }
}
