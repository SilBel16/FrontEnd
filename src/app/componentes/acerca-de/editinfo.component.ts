import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
  inf: Info = null;
  
  constructor(private sInfo: InfoService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sInfo.detail(id).subscribe(
      data =>{
        this.inf = data;
      }, err =>{
        alert("Error al modificar información");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sInfo.update(id, this.inf).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar información");
         this.router.navigate(['']);
      }
    )
  }

}