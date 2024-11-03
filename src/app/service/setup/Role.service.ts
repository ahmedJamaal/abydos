import { HttpService } from '@service/shared/http.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(public http: HttpService) {}
  getAllRecords(accountType: number): Observable<any> {
    return this.http._getCall<any>(`${environment.apiUrl}/role/${accountType}`);
  }
}
