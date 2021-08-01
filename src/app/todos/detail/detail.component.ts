import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public todo:Todo;

  constructor(private route:ActivatedRoute, private todoService:TodoService) { }

  ngOnInit() {
    const task = this.route.snapshot.paramMap.get("task");
    this.todo = this.todoService.todoList.find(element=> element.task === task);
  }

}
