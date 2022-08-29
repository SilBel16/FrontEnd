import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-editsoftskill',
  templateUrl: './editsoftskill.component.html',
  styleUrls: ['./editsoftskill.component.css']
})
export class EditsoftskillComponent implements OnInit {
  ssk: Softskill = null;
  
  constructor(private sSoftskill: SoftskillService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSoftskill.detail(id).subscribe(
      data =>{
        this.ssk = data;
      }, err =>{
        alert("Error al modificar Soft skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSoftskill.update(id, this.ssk).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Soft skill");
         this.router.navigate(['']);
      }
    )
  }

}
