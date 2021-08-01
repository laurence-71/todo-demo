import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList:Todo[];

  constructor(private http:HttpClient) { }

  get():Observable<Todo[]>{
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key,
      })
    };
    return this.http.get<Todo[]>(environment.jsonbin.url, options).pipe(
      tap(
        (todoList: Todo[])=>{
          this.todoList = todoList;
        },
        ()=>{}
      )
    );
  }

  post(todo: Todo){
    const tab = [];
    this.todoList.forEach(item =>{
      tab.push(item);
    });
    tab.push(todo);
    return this.put(tab).pipe(
      tap(
        ()=>{
          this.todoList.push(todo);
        },
        ()=>{
          console.log("recommencer");
        }
      )
    );
  }

  delete(todo: Todo){
    const tab = [];
    this.todoList.forEach(item=>{
      if(item !=todo){
        tab.push(item);
      }
    });
    return this.put(tab).pipe(
      tap(
        ()=>{
          const index = this.todoList.indexOf(todo);
          this.todoList.splice(index, 1);
        },
        ()=>{}
      )
    );
  }

  put(todoList: Todo[]): Observable<Todo[]> {
    return this.http.put<Todo[]>(environment.jsonbin.url,todoList,
      {
        headers: new HttpHeaders({
          "secret-key": environment.jsonbin.key,
          "Content-Type":"application/json",
          "versioning":"false"
        })
      })
    }

}
