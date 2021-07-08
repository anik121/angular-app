import { Component, OnInit, Input } from '@angular/core';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks = TASKS;
  constructor() {}

  ngOnInit(): void {}

  onAccept(id: any): void {
    console.log('You Successfully Accept ' + id);
  }
  onDelete(id: any): void {
    console.log('You Successfully Decline ' + id);
  }
}
