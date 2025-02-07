import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() taskName!: string;
  @Input() taskDescription!: string;
  @Input() taskCompleted!: boolean;
  @Output() addTask = new EventEmitter();

  onSubmit() {
    const task = {
      title: this.taskName,
      description: this.taskDescription,
      completed: this.taskCompleted,
    };

    console.log("from addTask submit method")
    this.addTask.emit(task);
  }
}
