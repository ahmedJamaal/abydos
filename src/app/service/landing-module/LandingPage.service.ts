import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Paging } from '@model/Utils/Pagination';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllEventByPage(paging: Paging): Observable<any> {
    return this._http.get<any>(
      `${environment.apiUrl}/public/Event?page=${paging.page - 1}&size=${paging.size}`
    ,{headers:{skip:"true"}});
  }
  getAllNewsByPage(paging: Paging): Observable<any> {
    return this._http.get<any>(
      `${environment.apiUrl}/public/news?page=${paging.page - 1 }&size=${
        paging.size
      }`,{headers:{skip:"true"}}
    );
  }

}
