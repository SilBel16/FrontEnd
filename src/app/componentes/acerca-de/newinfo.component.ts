import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-newinfo',
  templateUrl: './newinfo.component.html',
  styleUrls: ['./newinfo.component.css']
})
export class NewinfoComponent implements OnInit {
    nombre: string = '';
    apellido: string = '';
    profileImg: string = '';
    position: string = '';
    aboutMe: string = '';
    cvFile: string = '';
    mail: string = '';
    phone: string = '';
    city: string = '';
    country: string = '';

  constructor(private sInfo: InfoService, private router: Router) { }

  ngOnInit(): void {
  }
    onCreate(): void {
      const info = new Info(this.nombre, this.apellido, this.profileImg, this.position, this.aboutMe, this.cvFile, this.mail, this.phone, this.city, this.country);
      this.sInfo.save(info).subscribe(
        data=> {
        alert("Información agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
    }
}