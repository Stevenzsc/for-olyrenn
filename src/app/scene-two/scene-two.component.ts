import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scene-two',
  templateUrl: './scene-two.component.html',
  styleUrls: ['./scene-two.component.scss']
})
export class SceneTwoComponent implements OnInit {
  panelOpenState = false;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor() { }

  ngOnInit() {
    var square = document.getElementsByClassName('square');

    for(var i = 0; i<square.length; i++){
      square[i].addEventListener('mouseenter', function(){
        this.classList.add("rubberBand");
        this.addEventListener("animationend", function(){
          this.classList.remove("rubberBand");
        }, false);
      })
    }
  }

  

}
