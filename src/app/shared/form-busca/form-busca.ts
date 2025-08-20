import { Component } from '@angular/core';
import { provideNativeDateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.html',
  standalone: false,  // ou simplesmente remover a linha
  styleUrls: ['./form-busca.scss'],
  providers: [
    provideNativeDateAdapter(), // inicializa o adaptador nativo
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, // idioma português
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }, // formato
  ],
})
export class FormBusca {
  tipoPassagem: 'ida-volta' | 'somente-ida' = 'ida-volta'; // valor inicial
}
