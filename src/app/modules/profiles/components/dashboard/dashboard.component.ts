import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;
  constructor(private usersService: UsersService){}

  

  ngOnInit(): void {
    this.users = this.usersService.getUsers().subscribe(data=>{
      this.users = data;
      
    });
  }

}
