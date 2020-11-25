import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { DashboardService } from '../../dashboard.service';

import User from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  exibirFavoritos = false;

  @Output()
  onFavoritadoRemovido: EventEmitter<boolean> = new EventEmitter();

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  renderMaps = false;

  constructor(
    private service: DashboardService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  favoritar(): void {
    const hasSaved = this.service.saveFavorite(this.user);

    hasSaved ?
    this.snackBar.open("Favorito adicionado :)", 'OK!', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    }) :
    this.snackBar.open('Favorito Já foi adicionado', 'OK!', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

  }

  removerFavorito(): void {
    this.service.removerFavorito(this.user);

    this.snackBar.open('Favorito removido.', '', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

    this.onFavoritadoRemovido.emit(true);
  }

  teste(event): void {
    console.log(event);
  }

}
