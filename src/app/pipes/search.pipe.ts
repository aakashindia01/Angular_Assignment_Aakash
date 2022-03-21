import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(user: any, searchValue:string) {
    if(!user || !searchValue){
      return user;
    }
    const User =[];
    for(const value of user){
      if(value['name']===searchValue){
        User.push(value);
      }
    }
    return User;
  }

}
