import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public episodesOfSeasons$ = this.rickAndMortyService.episodesOfSeasons$;
  public isLoading$ = this.loaderService.isLoaderActive$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickAndMortyService: RickandmortyService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      const id = Number(value.get('seasonNumber'));

      if (id) {
        this.loaderService.loaderOn();
        this.rickAndMortyService.getEpisodesOfSeason(id);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
