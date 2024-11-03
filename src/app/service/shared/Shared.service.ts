import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ContractTypeService } from '@service/admin-module/contract-type.service';
import { SectorService } from '@service/admin-module/sector.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  allowedImagesTypes = ['image/jpeg', 'image/png'];
  constructor(
    public http: HttpService,
    private sectorService: SectorService,
    private contractTypes: ContractTypeService,
  ) { }

  getAllProduct(): any {
    // return this.productService.getAllRecords();
  }
  getAllSectors(): any {
    return this.sectorService.getAllRecords();
  }
  getAllContractTypes(): any {
    return this.contractTypes.getAllRecords();
  }
  getAllClaimants(): any {
    return this.http._getCall<any>(
      `${environment.apiUrl}/User/listByAccount/CLAIMANT`
    );
  }
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
