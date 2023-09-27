import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ARComponent } from './ar/ar.component';
import { ServresComponent } from './servres/servres.component';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  {path:'train',component:ARComponent},
  {path:'server',component:ServresComponent},
  {path:'mychart',component:MychartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
