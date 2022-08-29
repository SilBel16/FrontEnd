import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-newsoftskill',
  templateUrl: './newsoftskill.component.html',
  styleUrls: ['./newsoftskill.component.css']
})
export class NewsoftskillComponent implements OnInit {
  nombreHab: string = '';
  iconHab: string = '';

  constructor(private sSoftskill: SoftskillService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const pro = new Softskill (this.nombreHab, this.iconHab);
      this.sSoftskill.save(pro).subscribe(
        data=> {
        alert("SoftSkill agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
}
