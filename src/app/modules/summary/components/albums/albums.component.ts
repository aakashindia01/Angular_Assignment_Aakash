import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  
  loading$ = this.loader.loading$;
  data:any
  id:any

  constructor(private route:ActivatedRoute,
    private usersService:UsersService,
    public loader:LoadingService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getAlbums();
    
  }


  getAlbums(){
    this.usersService.getAlbums(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data)
    })
  }

}
