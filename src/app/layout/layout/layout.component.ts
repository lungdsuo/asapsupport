import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
 
    document.body.classList.remove('bg-account-pages');
    document.body.classList.remove('py-4');
    document.body.classList.remove('py-sm-0');

    document.getElementById('theme_id').classList.remove('theme-cyan');
    if (this.router.url == '/') {
      document.getElementById('theme_id').classList.add('theme-cyan');
    }
    if (this.router.url == '/index1') {
      document.getElementById('theme_id').classList.add('theme-cyan');
    }
    else if (this.router.url == '/index2') {
      document.getElementById('theme_id').classList.add('theme-red');
    }
    else if (this.router.url == '/index3') {
      document.getElementById('theme_id').classList.add('theme-green');
    }
    else if (this.router.url == '/index4') {
      document.getElementById('theme_id').classList.add('theme-pink');
    }
    else if (this.router.url == '/index5') {
      document.getElementById('theme_id').classList.add('theme-blue');
    }
    else if (this.router.url == '/index6') {
      document.getElementById('theme_id').classList.add('theme-purple');
    }
    else if (this.router.url == '/index7') {
      document.getElementById('theme_id').classList.add('theme-cyan');
    }
    else if (this.router.url == '/index8') {
      document.getElementById('theme_id').classList.add('theme-orange');
    }
    else if (this.router.url == '/index9') {
      document.getElementById('theme_id').classList.add('theme-yellow');
    }
    else { }
  }
}
