import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  loading$ = this.loader.loading$;

  constructor(private route:ActivatedRoute,
    private usersService:UsersService,
    public loader:LoadingService) { }

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
