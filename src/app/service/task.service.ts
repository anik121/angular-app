import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';

interface Task {
  id: number;
  title: string;
  user: number;
  completePercent: number;
  timer: number;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
