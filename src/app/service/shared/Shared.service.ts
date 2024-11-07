import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(

  ) { }


  isNotEmpty<T>(value: T): boolean {
    if (value === undefined || value === null) {
        return false;
    }

    if (Array.isArray(value) && value.length === 0) {
        return false;
    }

    if (typeof value === 'string' && value.trim() === '') {
        return false;
    }

    return true;
}


}
