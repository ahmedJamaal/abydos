import { Paging } from '@model/Utils/Pagination';
import { HttpService } from '@service/shared/http.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserGroup } from '@model/setup/account/UserGroup';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  constructor(public http: HttpService) {}

  getAllRecordByPage(paging: Paging): Observable<any> {
    return this.http._getCall<UserGroup[]>(`${environment.apiUrl}/userGroup`);
  }
  getAllRecords(): Observable<any> {
    return this.http._getCall<UserGroup>(
      `${environment.apiUrl}/userGroup/list`
    );
  }
  getOneRecordById(id: any): Observable<UserGroup> {
    return this.http._getCall<UserGroup>(
      `${environment.apiUrl}/userGroup/${id}`
    );
  }
  addRecord(record: UserGroup): Observable<any> {
    return this.http._postCall<any>(
      `${environment.apiUrl}/userGroup`,
      record,
      false
    );
  }

  editRecord(record: any): Observable<any> {
    return this.http._putCall<any>(
      `${environment.apiUrl}/userGroup`,
      record,
      false
    );
  }

  deleteRecord(id: number) {
    return this.http._deleteCall<any>(`${environment.apiUrl}/userGroup/${id}`);
  }
}
