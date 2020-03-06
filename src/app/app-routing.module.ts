import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ListitemsComponent } from './listitems/listitems.component';


const routes: Routes = [
  {path:'listitems', component:ListitemsComponent},
  {path:'additem', component:AdditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
