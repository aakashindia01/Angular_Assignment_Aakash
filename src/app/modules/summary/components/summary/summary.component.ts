import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import {UsersService} from '../../../../services/users.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  loading$ = this.loader.loading$
data:any
  id:any

  constructor(private route:ActivatedRoute,
    private usersService:UsersService,
    public loader:LoadingService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getOneUser();
  }

  getOneUser(){
    this.usersService.getOneUser(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data)
    })
  }

}
