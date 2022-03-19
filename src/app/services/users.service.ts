import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

interface User{
name: string,
username:string,
email:string

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(public http:HttpClient) { }


  getUsers():Observable<User>{
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users');
  }

  getOneUser(id:any):Observable<User>{
    
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id)
    
  }

  getAlbums(id:any):Observable<User>{
    
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id+'/albums')
  }

  getPosts(id:any):Observable<User>{
    
    return this.http.get<User>('http://jsonplaceholder.typicode.com/users/'+id+'/posts')
  }
  
}
