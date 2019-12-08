import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  switch = 1;
  cur_year = 0;

  constructor() {
   }

  ngOnInit() {
    this.cur_year = new Date().getFullYear();
  }

  onChangeSwitch() {
    this.switch == 1 ?  this.switch = 0 : this.switch = 1;
  }
  onChangeColor(color:string)
  {
    document.getElementById("theme_id").className = "";
    document.getElementById('theme_id').classList.add('theme-'+color);
  }

}
