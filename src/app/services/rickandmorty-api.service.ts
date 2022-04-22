import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiSeasonsResponse {
  seasonNumber: number;
  episodesCount: number;
}

export interface ApiEpisodeResponse {
  name: string;
  air_date: string;
  episode_characters: EpisodeCharacters[];
}

interface EpisodeCharacters {
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class RickandmortyApiService {
  private readonly API_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getSeasons() {
    return this.http.get<ApiSeasonsResponse[]>(
      `${this.API_URL}listOfEpisodesInSeason`
    );
  }

  getEpisodesOfSeason(seasonNumber: number) {
    return this.http.get<ApiEpisodeResponse[]>(
      `${this.API_URL}seasons?season=${seasonNumber}`
    );
  }
}
