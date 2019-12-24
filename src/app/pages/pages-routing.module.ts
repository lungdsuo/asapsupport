import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
];

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
