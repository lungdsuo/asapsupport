import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    PagesRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ]
})
export class PagesModule { }
