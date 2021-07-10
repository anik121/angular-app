import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';

interface Task {
  id: number;
  title: string;
  user: number;
  completePercent: number;
  timer: number;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  textTask: string = '';
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => {
      this.tasks = task;
    });
  }

  showingDate(unix: number) {
    let d = new Date(unix);
    let hh = d.getHours();
    let mm = d.getMinutes();
    let _time_zoon = hh > 12 ? hh - 12 : hh;
    let timeTable = hh >= 12 ? 'PM' : 'AM';
    return _time_zoon + ':' + mm + timeTable;
  }
  onAccept(id: any): void {
    console.log('You Successfully Accept ' + id);
  }
  onDelete(id: any): void {
    console.log('You Successfully Decline ' + id);
  }
}
