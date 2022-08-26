import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  hab: Skill[] = [];

  constructor(private sSkill: SkillService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe(data => {this.hab = data;})
} 

delete(id?: number){
  if(id != undefined){
    this.sSkill.delete(id).subscribe(
      data => {
        this.cargarSkill();
      }, err => {
        alert("No se pudo borrar la educacion");
      }
    )
  }
}
}

/*
export class SkillsComponent implements OnInit {
  habilidadesDurasList:any;
  habilidadesBlandasList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.habilidadesDurasList = data.skillsHard;
    });
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.habilidadesBlandasList = data.skillsSoft;
    });
  }

} */
