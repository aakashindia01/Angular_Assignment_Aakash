import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../interfaces/user'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(public http:HttpClient) { }


  getUsers():Observable<User>{
    return this.http.get<User>('https://crud-api-js.herokuapp.com/api/user');
    // return this.http.get<User>('http://jsonplaceholder.typicode.com/users/');
  }

  getOneUser(id:any):Observable<User>{
    
    return this.http.get<User>('https://crud-api-js.herokuapp.com/api/user?id='+id)
    // return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id)
    
  }

  getAlbums(id:any):Observable<User>{
    
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id+'/albums')
  }

  getPosts(id:any):Observable<User>{
    
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id+'/posts')
  }
  
}
