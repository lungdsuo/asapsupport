import { Component, OnInit } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.css']
})
export class Index4Component implements OnInit {

  constructor() { }

  ngOnInit() {

   document.getElementById('navbar1').classList.add('navbar-white');

    window.onscroll = function () { myFunction() };
    var navbar1 = document.getElementById("navbar1");
    function myFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
      {
        navbar1.style.backgroundColor = "#ffffff";
        navbar1.style.padding = "10px";
      }
      else
      {
        navbar1.style.backgroundColor = "";
      }   
    } 
  }
}
