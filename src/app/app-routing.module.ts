import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
