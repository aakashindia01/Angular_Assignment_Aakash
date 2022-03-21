import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(user: any, searchValue:string) {
    if(user.length===0 || searchValue===''){
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
