export interface IExercise {
  name: string;
  description: string;
  difficulty: Difficulty;
}

export enum Difficulty {
  easy,
  medium,
  hard,
}

export class Exercise implements IExercise {
  name: string;
  description: string;
  difficulty: Difficulty;

  constructor(name: string, description: string, difficulty: Difficulty) {
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
  }
}
