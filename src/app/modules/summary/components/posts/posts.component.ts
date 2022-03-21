import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private usersService:UsersService) { }

  id:any;
  data:any;

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getPosts();
   
  }

  getPosts(){
    this.usersService.getPosts(this.id).subscribe(data=>{
      this.data = data;
    })
  }

  
}
