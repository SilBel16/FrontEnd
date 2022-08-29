import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  red: Redes[] = [];

  constructor(private sRedes: RedesService, private router: Router, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarRedes();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

    cargarRedes(): void {
      this.sRedes.lista().subscribe(data => {this.red = data;})
  } 

  delete(id?: number){
    if(id != undefined){
      this.sRedes.delete(id).subscribe(
        data => {
          this.cargarRedes();
        }, err => {
          alert("No se pudo borrar la red social");
        }
      )
    }
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
} 

}


 /*  isLogged = false;
  /* miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  } 
  constructor (private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }

    onLogout(): void {
      this.tokenService.logOut();
      window.location.reload();
    }

    login() {
      this.router.navigate(['/login'])
  } 
}*/
