import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiSeasonsResponse {
  listOfEpisodesInSeason: ApiSeasonsNestedResponse[];
}
export interface ApiSeasonsNestedResponse {
  seasonNumber: number;
  episodesCount: number;
}

export interface ApiEpisodeResponse {
  season: number;
  episodes: ApiEpisodes[];
}

interface ApiEpisodes {
  name: string;
  air_date: string;
  episode_characters: EpisodeCharacters[];
}

export interface EpisodeCharacters {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class RickandmortyApiService {
  private readonly API_URL: string =
    'https://rick-morty-ak-api.herokuapp.com/rickmortyapi/';

  constructor(private http: HttpClient) {}

  getSeasons() {
    return this.http.get<ApiSeasonsResponse>(`${this.API_URL}seasons`);
  }

  getEpisodesOfSeason(seasonNumber: number) {
    return this.http.get<ApiEpisodeResponse[]>(
      `${this.API_URL}seasons/${seasonNumber}`
    );
  }
}
