import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  constructor(private platform:Platform) { }

  ngOnInit():void {
    this.platform.backButton.subscribeWithPriority(0,
      ()=>{
        alert("Done");
      },);
  }

}
