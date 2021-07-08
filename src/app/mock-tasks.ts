// import { Task } from './Task';

interface Task {
  id: number;
  title: string;
  user: number;
  completePercent: number;
  timer: number;
}
export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Export Icons',
    user: 1,
    completePercent: 34,
    timer: 1625728869686,
  },
  {
    id: 2,
    title: 'Learn Angular',
    user: 3,
    completePercent: 45,
    timer: 1625728669686,
  },
  {
    id: 3,
    title: 'Start to working on Git Tourer',
    user: 1,
    completePercent: 74,
    timer: 1625728869686,
  },
  {
    id: 4,
    title: 'Create Task App',
    user: 1,
    completePercent: 52,
    timer: 1625728669686,
  },
];
