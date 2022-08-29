import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  urlImgPro: string = '';
  nombrePro: string = '';
  descripcionPro: string = '';
  urlPro: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const pro = new Proyecto(this.urlImgPro, this.nombrePro, this.descripcionPro, this.urlPro);
      this.sProyecto.save(pro).subscribe(
        data=> {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
}
