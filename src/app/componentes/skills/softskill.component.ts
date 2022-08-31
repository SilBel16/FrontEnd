import { Component, OnInit } from '@angular/core';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-softskill',
  templateUrl: './softskill.component.html',
  styleUrls: ['./softskill.component.css']
})
export class SoftskillComponent implements OnInit {
  
  ssk: Softskill[] = [];

  constructor(private sSoftskill: SoftskillService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSoftskill();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoftskill(): void {
    this.sSoftskill.lista().subscribe(data => {this.ssk = data;})
} 

delete(id?: number){
  if(id != undefined){
    this.sSoftskill.delete(id).subscribe(
      data => {
        this.cargarSoftskill();
      }, err => {
        alert("No se pudo borrar la soft skill");
      }
    )
  }
}
}