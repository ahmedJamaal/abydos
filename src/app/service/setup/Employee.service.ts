import { Paging } from '@model/Utils/Pagination';
import { HttpService } from '@service/shared/http.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from '@model/setup/account/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http: HttpService) {}

  getAllRecordByPage(paging: Paging): Observable<any> {
    return this.http._postCall<Employee[]>(
      `${environment.apiUrl}/EmployeeList/`,
      paging,
      false
    );
  }
  getAllRecords(): Observable<any> {
    return this.http._getCall<Employee>(
      `${environment.apiUrl}/GetEmployeeList/`
    );
  }
  getOneRecordById(id: any): Observable<Employee> {
    return this.http._getCall<Employee>(
      `${environment.apiUrl}/GetEmployeeById/${id}`
    );
  }
  addRecord(record: FormData): Observable<any> {
    return this.http._postCall<any>(
      `${environment.apiUrl}/EmployeeOp/add/`,
      record,
      true
    );
  }
  editRecord(record: FormData, id: number): Observable<any> {
    return this.http._putCall<any>(
      `${environment.apiUrl}/EmployeeOp/edit/${id}/`,
      record,
      true
    );
  }
  deleteRecord(id: number) {
    return this.http._deleteCall<any>(
      `${environment.apiUrl}/EmployeeOp/delete/${id}/`
    );
  }
}
