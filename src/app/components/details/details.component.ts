import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public episodesOfSeasons$ = this.rickAndMortyService.episodesOfSeasons$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickAndMortyService: RickandmortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      const id = Number(value.get('seasonNumber'));

      if (id) {
        this.rickAndMortyService.getEpisodesOfSeason(id);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
