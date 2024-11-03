import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor(private http: HttpService,) { }

  getLanguages(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/language`,
    );
  }
  getEvents(): Observable<string> {
    return this.http._getCall<string>(
      `${environment.apiUrl}/enums/event`,
    );
  }
  getCharacters(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/character`,
    );
  }
  getCaseTypes(caseCategory : string): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/caseType/{caseCategory}?caseCategory=${caseCategory}`,
    );
  }
  getAttachments(): Observable<string> {
    return this.http._getCall<string>(
      `${environment.apiUrl}/enums/attachment`,
    );
  }
  getArbitrators(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/arbitrator`,
    );
  }
  getAccountTypeEmployee(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/accountType/employee`,
    );
  }
  getAccountTypeUser(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/accountType/User`,
    );
  }
  getLetterType(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/letter_type`,
    );
  }
  getCaseCategory(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/caseCategory`,
    );
  }
  getCoinsType(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/coins_type`,
    );
  }
  getLetterStatus(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/letter_status`,
    );
  }
  getAwardTypes(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/award_types`,
    );
  }
  getAwardTypesArbitrator(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/award_type/Arbitrator`,
    );
  }
  getAwardTypesParties(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/award_type/parties`,
    );
  }
  getAwardStatuse(): Observable<string[]> {
    return this.http._getCall<string[]>(
      `${environment.apiUrl}/enums/award_status`,
    );
  }
  
}
