import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { Invertexto } from 'src/app/service/invertexto';

@Component({
  selector: 'app-validador',
  templateUrl: './validador.page.html',
  styleUrls: ['./validador.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonButton,
    IonCard, IonCardContent
  ]
})
export class ValidadorPage {
  valor: string = '';
  resultado: any = null;

  constructor(private invertextoService: Invertexto) {}

  validar() {
    this.invertextoService.validarDocumento(this.valor).subscribe({
      next: (res) => {
        this.resultado = res;
      },
      error: (err) => {
        console.error('Erro na API:', err);
        this.resultado = { error: true };
      }
    });
  }
}
