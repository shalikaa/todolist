import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  selectedDay: string = 'Monday';
  selectedTime: string = '';
  activeTodos: any[] = [];
  completedTodos: any[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTask = {
        task: this.newTodo,
        day: this.selectedDay,
        time: this.selectedTime
      };
      this.activeTodos.push(newTask);
      this.newTodo = '';
      this.selectedDay = 'Monday';
      this.selectedTime = '';
    }
  }

  completeTask(todo: any) {
    const index = this.activeTodos.indexOf(todo);
    if (index !== -1) {
      this.activeTodos.splice(index, 1);
      this.completedTodos.push(todo);
    }
  }

  removeTask(todo: any) {
    const activeIndex = this.activeTodos.indexOf(todo);
    if (activeIndex !== -1) {
      this.activeTodos.splice(activeIndex, 1);
    }

    const completedIndex = this.completedTodos.indexOf(todo);
    if (completedIndex !== -1) {
      this.completedTodos.splice(completedIndex, 1);
    }
  }
}