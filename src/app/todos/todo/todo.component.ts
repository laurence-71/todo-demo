import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public disabled:boolean;
  public todoForm:FormGroup;

  constructor(private todoService:TodoService, private router:Router,private fb:FormBuilder ) { }

  ngOnInit():void {
    this.disabled=true;
    this.todoService.get().subscribe(
      ()=>{
        this.disabled = false;
      },
      ()=>{
        this.router.navigate(['todos']);
      }
    )
    this.todoForm = this.fb.group(
      {
        task:["",Validators.required],
        description:["",Validators.required],
      }
    )
  }

  public create() {
    if(this.todoForm.valid){
      this.disabled = true;
      return this.todoService.post({
        task: this.todoForm.get("task").value,
        description: this.todoForm.get("description").value
     
      }).subscribe(
        ()=>{
          this.router.navigate(['todos']);
        },
        ()=>{}
      );
    }
  }

}
