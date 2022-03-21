import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  oneUser:any;
  id:any;

  constructor(private auth:AuthService,
    private usersService:UsersService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getOneUser()
  }

  getOneUser(){
    this.usersService.getOneUser(this.id).subscribe(oneUser=>{
      this.oneUser=oneUser;
      console.log(this.oneUser)
    })
  }

  logout():void{
    this.auth.logout();
  }
}
