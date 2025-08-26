import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa todos os componentes do Ionic
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Invertexto } from 'src/app/service/invertexto';
import { Router } from '@angular/router';

addIcons({ arrowBack });

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // <-- basta isso
  ]
})
export class CepPage implements OnInit {
  cep: string = '';
  dadosCep: any = null;
  errorMessage: string = '';

  constructor(
    private invertextoService: Invertexto,
    private router: Router
  ) {}

  ngOnInit() {}

  buscarCep() {
    if (this.cep && this.cep.length === 8) {
      this.invertextoService.getByCep(this.cep).subscribe(
        (response) => {
          console.log(response);
          this.dadosCep = response;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Erro na requisição', error);
          this.dadosCep = null;
          this.errorMessage =
            'Erro ao buscar dados do CEP, verifique o CEP e tente novamente.';
        }
      );
    } else {
      this.errorMessage = 'CEP inválido. Deve conter 8 dígitos.';
    }
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
