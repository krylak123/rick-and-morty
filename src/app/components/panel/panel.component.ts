import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public seasons$ = this.rickAndMortyService.seasons$;

  constructor(private rickAndMortyService: RickandmortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getSeasons();
  }
}
