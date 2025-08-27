import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Invertexto {
  private _token: string = '21292|iDHgHN16kikz2AgLn9ADUbcfvRuATQru';

  constructor(private http: HttpClient) {}

  getPessoa(): Observable<any> {
    const url = `https://api.invertexto.com/v1/faker?token=${this._token}&fields=name,cpf&locale=pt_BR`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Erro na requisição: ', error);
        return throwError(() => new Error('Erro ao buscar os dados'));
      })
    );
  }

  getByCep(cep: string): Observable<any> {
    const url = `https://api.invertexto.com/v1/cep/${cep}?token=${this._token}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Erro na requisição: ', error);
        return throwError(() => new Error('Erro ao buscar os dados'));
      })
    );
  }

 validarDocumento(value: string): Observable<any> {
  const cleanValue = value.replace(/\D/g, ''); // remove pontos/traços
  const url = `https://api.invertexto.com/v1/validator?value=${cleanValue}`;

  const headers = new HttpHeaders({
    Authorization: `Bearer ${this._token}` // envia o token no header
  });

  return this.http.get<any>(url, { headers }).pipe(
    catchError((error) => {
      console.error('Erro na requisição: ', error);
      return throwError(() => new Error('Erro ao validar documento'));
    })
  );
}
}
