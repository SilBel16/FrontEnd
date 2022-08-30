import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/model/info';
import { persona } from 'src/app/model/persona.model';
import { InfoService } from 'src/app/service/info.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  inf: Info[] = [];

  constructor(private sInfo: InfoService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarInfo();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarInfo(): void {
    this.sInfo.lista().subscribe(data => {this.inf = data;})
} 

delete(id?: number){
  if(id != undefined){
    this.sInfo.delete(id).subscribe(
      data => {
        this.cargarInfo();
      }, err => {
        alert("No se pudo borrar la educacion");
      }
    )
  }
}
}

 /*   this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList = data.education;
    }); */