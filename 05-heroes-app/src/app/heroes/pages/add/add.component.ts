import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class AddComponent implements OnInit {

  edit: boolean = false;
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.edit = true;
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
      )
      .subscribe(hero => this.hero = hero);
  }

  save() {
    if (this.hero.superhero.trim().length === 0) return;
    if (this.hero.id) {
      this.heroesService.updateHero(this.hero)
        .subscribe(() => this.showSnackbar('Character updated'));
    } else {
      this.heroesService.addHero(this.hero)
        .subscribe(hero => {
          this.router.navigate(['/heroes/edit', hero.id]);
          this.showSnackbar('Character created');
        });
    }
  }

  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.hero
    });
    dialog.afterClosed()
      .subscribe(result => {
        if (result) {
          this.heroesService.deleteHero(this.hero)
            .subscribe(() => {
              this.router.navigate(['/heroes']);
              this.showSnackbar('Character deleted');
            });
        }
      });
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    })
  }

}
