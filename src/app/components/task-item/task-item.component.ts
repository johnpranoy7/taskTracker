import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() removeTask = new EventEmitter<Task>();
  @Output() toggleReminder = new EventEmitter<Task>();

  constructor(){}

  deleteTask(task: Task) {
    this.removeTask.emit(task);
  }

  toggleTask(task: Task) {
    this.toggleReminder.emit(task);
  }
}
