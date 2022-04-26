import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, ReplaySubject, tap } from 'rxjs';
import {
  ApiEpisodeResponse,
  ApiSeasonsNestedResponse,
  RickandmortyApiService,
} from './rickandmorty-api.service';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  private seasons = new ReplaySubject<ApiSeasonsNestedResponse[]>(1);
  private episodesOfSeasons = new ReplaySubject<ApiEpisodeResponse>(1);

  constructor(private rickAndMortyApiService: RickandmortyApiService) {}

  public get seasons$() {
    return this.seasons.asObservable();
  }

  public get episodesOfSeasons$() {
    return this.episodesOfSeasons.asObservable();
  }

  public getSeasons() {
    this.rickAndMortyApiService
      .getSeasons()
      .pipe(
        map((res) => res.listOfEpisodesInSeason),
        catchError((err: HttpErrorResponse) => of(err))
      )
      .subscribe((res) => {
        if (res instanceof HttpErrorResponse) {
          console.error(res);
        } else this.seasons.next(res);
      });
  }

  public getEpisodesOfSeason(seasonNumber: number) {
    this.rickAndMortyApiService
      .getEpisodesOfSeason(seasonNumber)
      .pipe(
        tap(console.log),
        catchError((err: HttpErrorResponse) => of(err))
      )
      .subscribe((res) => {
        if (res instanceof HttpErrorResponse) {
          console.error(res);
        } else this.episodesOfSeasons.next(res);
      });
  }
}
