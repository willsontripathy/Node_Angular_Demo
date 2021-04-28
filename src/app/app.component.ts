import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from './Models/employee.model';
import { PostService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-app';
  posts:Post[] = [];
  constructor(private postservice:PostService, private store:Store<any>){

  }
  
}
