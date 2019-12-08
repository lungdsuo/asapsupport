import { Component, OnInit,ViewChild, ChangeDetectionStrategy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index7',
  templateUrl: './index7.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
`]
})
export class Index7Component implements OnInit {


  closeResult: string;

  id = 'JlvxDa7Sges';
  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;

  constructor(private modalService: NgbModal) {}

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
 
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg'  });
  }
  ngOnInit() {
    var i = 1;
    setInterval(function() {


      if(i == 1)
      {  document.getElementById('foo').innerHTML = "We help startups launch their products"; }
      else if(i == 2)
      {  document.getElementById('foo').innerHTML = "Perfect solution for small businesses"; }
      else
      {   document.getElementById('foo').innerHTML = "We love make things amazing and simple"; }
      if(i >= 3) { i=0; }
      i++;
    }, 2500);
  }
}
