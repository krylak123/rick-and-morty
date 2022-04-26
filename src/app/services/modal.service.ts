import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { EpisodeCharacters } from './rickandmorty-api.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private data = new ReplaySubject<EpisodeCharacters[]>(1);
  public isOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  public get data$() {
    return this.data.asObservable();
  }

  public get isOpen$() {
    return this.isOpen.asObservable();
  }

  public modalOpen(data: EpisodeCharacters[]) {
    this.data.next(data);
    this.isOpen.next(true);
  }

  public modalClose() {
    this.isOpen.next(false);
  }
}
