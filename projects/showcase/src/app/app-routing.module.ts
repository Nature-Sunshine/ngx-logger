import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from '../../../natr/historian/src/lib/components/one/one.component';


const routes: Routes = [
  {path: '', component: OneComponent},
  {path: '**', component: OneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
