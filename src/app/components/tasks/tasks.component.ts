import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskServiceService } from '../../services/task-service.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data;
      },
      (error) => {
        console.log('Error Fetching Tasks:', error);
      }
    );
    console.log('NgInit called');
    console.log(this.tasks);
  }

  removeTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter((t) => t.id != task.id);
      },
      (error) => {
        console.log('Error deleting Task', error);
      }
    );
  }

  updateTasks(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(() => {});
  }

  pushTask(task: Task) {
    console.log("addTask before calling service");
    this.taskService.addTask(task).subscribe(() => this.tasks.push(task));
  }
}
