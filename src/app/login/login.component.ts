import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
      document.body.classList.add('bg-account-pages');
      document.body.classList.add('py-4');
      document.body.classList.add('py-sm-0');
    
  }

}
