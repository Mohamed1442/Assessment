export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface TodoFields {
  title: string;
  description: string;
}

export enum ESelectStatus {
  ALL = "all",
  COMPLETED = "completed",
  IN_COMPLETED = "incomplete",
}
