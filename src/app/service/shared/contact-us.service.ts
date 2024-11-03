import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Paging } from '@model/Utils/Pagination';
import { ContactUs } from '@model/public-models/contact-us';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  createContactMessage(record: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(`${environment.apiUrl}/public/contactus/create`, record , {headers:{skip:"true"}});
  }
  createContactAdmin(record: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(`${environment.apiUrl}/contactUs/create`, record);
  }
  getOneRecords(id: number): Observable<any> {
    return this.http.get<ContactUs>(
      `${environment.apiUrl}/contactUs/${id}`
    );
  }
  getAllRecordByPage(paging: Paging): Observable<any> {
    return this.http.get<ContactUs>(
      `${environment.apiUrl}/contactUs/all?page=${paging.page -1}&size=${paging.size
      }`
    );
  }
  getAllRecords(): Observable<any> {
    return this.http.get<ContactUs>(
      `${environment.apiUrl}/contactUs/list`
    );
  }
  deleteRecord(id: number) {
    return this.http.delete<ContactUs>(
      `${environment.apiUrl}/contactUs/delete/${id}`
    );
  }
}
