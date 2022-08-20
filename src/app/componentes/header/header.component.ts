import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isLogged = false;
  /* miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  } */
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
}
