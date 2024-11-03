import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: boolean = false;

  constructor() { }

  setLoading(loading: boolean) {
    !loading ?  setTimeout(() => {
      this.loading = loading;
    }, 1000) : this.loading = loading;
  }
  routingLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1200)
  }

  getLoading(): boolean {
    return this.loading;
  }

}
