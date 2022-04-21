import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public mock$ = of([
    { seasonNumber: 1, episodesCount: 11 },
    { seasonNumber: 2, episodesCount: 10 },
    { seasonNumber: 3, episodesCount: 10 },
    { seasonNumber: 4, episodesCount: 10 },
    { seasonNumber: 5, episodesCount: 10 },
  ]);

  constructor() {}

  ngOnInit(): void {}

  public handleOnClick(season: number) {
    console.log(season);
  }
}
