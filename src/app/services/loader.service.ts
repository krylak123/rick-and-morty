import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoaderActive = new BehaviorSubject<boolean>(false);

  constructor() {}

  public get isLoaderActive$() {
    return this.isLoaderActive.asObservable();
  }

  public loaderOn() {
    this.isLoaderActive.next(true);
  }

  public loaderOff() {
    this.isLoaderActive.next(false);
  }
}
