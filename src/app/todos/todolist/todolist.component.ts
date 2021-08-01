import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  public disabled:boolean;
  public todoList:Todo[];
  public error:boolean;
  public todoDisabled;

  constructor(private todoService:TodoService) {
    this.todoList = this.todoService.todoList;
    this.retry();
   }

   retry(): void {
    this.todoService.get().subscribe(
      (todoList:Todo[])=> {
        this.error = false;
        this.todoList = todoList;
      },
      ()=>{
        this.error = true;
      }
    );
  }

  delete(todo: Todo){
    this.disabled=true;
    this.todoDisabled = todo;
    this.todoService.delete(todo).subscribe(
      ()=>{
        this.disabled = true;
      },
      ()=>{}
    );
  }

  ngOnInit() {}

}
