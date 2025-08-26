import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <-- importa tudo do Ionic
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Invertexto } from 'src/app/service/invertexto';
import { Router } from '@angular/router';

addIcons({ arrowBack });

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // <-- basta isso
  ]
})
export class PessoaPage implements OnInit {
  pessoa: any = null;
  errorMessage: string = '';

  constructor(
    private invertextoService: Invertexto,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPessoa();
  }

  getPessoa() {
    this.invertextoService.getPessoa().subscribe(
      (response) => {
        this.pessoa = response;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Erro na requisição', error);
        this.errorMessage = 'Erro ao gerar pessoa, tente novamente';
      }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
