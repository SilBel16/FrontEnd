import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

/*  experienciaList:any;
  miPortfolio:any; 

  constructor(private datosPortfolio:PortfolioService) { } */

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

/*    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaList = data.experience;
    });
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    }); */

    cargarExperiencia(): void {
      this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  } 

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}