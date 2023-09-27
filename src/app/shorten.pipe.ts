import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(data:any,limit:any): any{
    if(data.length>limit){
      return data.substr(0,limit) + '...';
    }
    return data;
  }

}
