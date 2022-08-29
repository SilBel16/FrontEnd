import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-newredes',
  templateUrl: './newredes.component.html',
  styleUrls: ['./newredes.component.css']
})
export class NewredesComponent implements OnInit {
  iconRed: string = '';
  nombreRed: string = '';
  urlRed: string = '';

  constructor(private sRedes: RedesService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const red = new Redes (this.iconRed, this.nombreRed, this.urlRed);
      this.sRedes.save(red).subscribe(
        data=> {
        alert("Red Social agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
  }
