import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/employee.model';
import { PostService } from '../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  posts:Post[]=[];
  constructor(private postservice:PostService) { }

  ngOnInit(){
    this.postservice.getAll().subscribe((data:any)=>{
      this.posts = data;
    })
    
  }

}
