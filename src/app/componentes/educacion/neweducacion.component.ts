import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  urlImgEdu: string = '';
  nombreEdu: string = '';
  descripcionEdu: string = '';
  inicioEdu: string = '';
  finEdu: string = '';
  urlEdu: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const edu = new Educacion(this.urlImgEdu, this.nombreEdu, this.descripcionEdu, this.inicioEdu, this.finEdu, this.urlEdu);
      this.sEducacion.save(edu).subscribe(
        data=> {
        alert("Educación agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
}