import { Component } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

// Create 3 column phases and sample tasks based on phase:
export class ColumnComponent {

todoTasks: HTMLElement | null = null
// todoTasks = document.getElementById('todo-tasks');
planningTasks: HTMLElement | null = null;
// planningTasks = document.getElementById('planning-tasks');
inprogressTasks: HTMLElement | null = null;
//inprogressTasks = document.getElementById('inprogress-tasks');

// retrieve DOM element w respective ID, assign to appropriate variable

tasks: string[] = ['Task 1', 'Task 2', 'Task 3']; }
// create array of sample tasks

ngOnInit() {
  this.todoTasks = document.getElementById('todo-tasks');
  this.planningTasks = document.getElementById('planning-tasks');
  this.inprogressTasks = document.getElementById('inprogress-tasks');
}

this.tasks.forEach((taskText, index) => {
  taskItem = document.createElement('div');
  taskItem.draggable = true;
  taskItem.className = 'alert alert-secondary';
  taskItem.textContent = taskText;
  taskItem.addEventListener('dragstart', drag);
  // iterates thru task array; creates div element, sets property (drag, class name, text content), adds event listener to start drag 'dragstart'

  if (index % 3 === 0) {
    todoTasks?.appendChild(taskItem);
  } else if (index % 3 === 1) {
    planningTasks?.appendChild(taskItem);
  } else {
    inprogressTasks?.appendChild(taskItem);
  }
});
// if...else w/in forEach loop distributes tasks in columns based on the remainder of the index when divided by 3


// Drag and drop feature between columns:

let draggedItem: HTMLElement | null = null;
// declares a variable draggedItem with the type HTMLElement | null and initialized as null; this variable stores the reference of the element being drag and dropped

allowDrop(event: Event) {
  event.preventDefault();
}
//function allowDrop(event: Event) { event.preventDefault(); }: This function is called when an element is being dragged over a drop target; prevents the default behavior and allows element to drop

drag(event: DragEvent) {
  draggedItem = event.target as HTMLElement;
}
// function called when an element is dragged; captures the reference of the dragged element in the draggedItem variable

drop(event: DragEvent, targetId: string) {
  event.preventDefault();
  target = document.getElementById(targetId);
  if (target) {
    target.appendChild(draggedItem as Node);
    draggedItem = null;
  }
}
// function called when an element is dropped; retrieve drop target by ID, append the dragged item to it, and set draggedItem back to null after drop


