import { Component, Injectable, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {
  sections = {};
  constructor(private scrollSpyService: ScrollSpyService, private router: Router) { }

  ngOnInit() {
  if(this.router.url == "/index1" || this.router.url == "/" )
  {
    document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#1bbc9d!important');  
  }
  else if(this.router.url == "/index2" || this.router.url == "/index3" || this.router.url == "/index6" || this.router.url == "/index5" || this.router.url == "/index7" || this.router.url == "/index8" || this.router.url == "/index9" )
  {
    document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#ffffff!important');  
  }
  else if(this.router.url == "/index4")
  {
    document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#f85f89!important');  
  }
  else
  {
    document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#000000!important');    
  }
   
    window.onscroll = function () 
    { 
       myFunction()
    };
    var navbar1 = document.getElementById("navbar1");
    function myFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          navbar1.style.backgroundColor = "#272a33";
          navbar1.style.padding = "10px";
      }
      else {
        
          navbar1.style.backgroundColor = "";
          navbar1.style.padding = "20px";
      }
    }
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
    document.getElementById('menu_button').classList.toggle('collapsed');
  }

  ngAfterViewInit() {

    let sections: NodeListOf<Element> = document.querySelectorAll(".section");
    let self = this;

    Array.prototype.forEach.call(sections, function (e) {
      self.sections[e.id] = parseFloat(e.offsetTop);
    });

console.log(JSON.stringify(self.sections));

    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      let scrollPosition = document.documentElement.scrollTop;
      
      for (let menu in this.sections) {
        if (this.sections[menu] <= scrollPosition) {
          if(menu == "" || menu == "testi" )
          {  }
          else
          {
            if(this.router.url == "/index1" || this.router.url == "/")
            {
              this.clearMenu('#393f4f');
              document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#1bbc9d!important');
            }
            else if(this.router.url == "/index2" || this.router.url == "/index3" || this.router.url == "/index5" || this.router.url == "/index6" || this.router.url == "/index7" || this.router.url == "/index8" || this.router.url == "/index9")
            {
              this.clearMenu('#ffffff99');
              document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#ffffff!important');
            }
            else if(this.router.url == "/index4")
            {
              this.clearMenu('#393f4f');
              document.querySelector('a[data="id_' + menu + '"]').setAttribute('style', 'color:#f85f89 !important');
            }
            else
            {
              this.clearMenu('#000000');
            }
         //   document.getElementById('navbarCollapse').classList.remove('show');
          }
        }
      }
    });
  }

  clearMenu(color) {
      document.querySelector('a[data="id_home"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_services"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_features"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_pricing"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_about"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_blog"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:'+color+'!important');
  }
}



