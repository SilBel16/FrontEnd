import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nombreHab: string = '';
  iconHab: string = '';
  nivelHab: number;
  etiquetaHab: string = '';

  constructor(private sSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const pro = new Skill (this.nombreHab, this.iconHab, this.nivelHab, this.etiquetaHab);
      this.sSkill.save(pro).subscribe(
        data=> {
        alert("Skill agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
}
