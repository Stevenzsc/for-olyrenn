import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-three',
  templateUrl: './scene-three.component.html',
  styleUrls: ['./scene-three.component.css']
})
export class SceneThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');

    floating_btn.addEventListener('click', () => {
      social_panel_container.classList.toggle('visible')
    });

    close_btn.addEventListener('click', () => {
      social_panel_container.classList.remove('visible')
    });
  }


}
