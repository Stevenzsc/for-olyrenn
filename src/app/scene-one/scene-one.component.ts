import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-scene-one',
  templateUrl: './scene-one.component.html',
  styleUrls: ['./scene-one.component.scss']
})
export class SceneOneComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
   
  }

  ngAfterContentInit(): void {
   
      //this.init();
   
    
  }

  init() {

    let menu = document.querySelector('.nav__list');
    let burger = document.querySelector('.burger');
    let doc = document;
    let l = $('.scrolly');
    let panel = $('.panel');
    let vh = $(window).height();
    
    let openMenu = function() {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('nav__list--active');
    };
    
    // reveal content of first panel by default
    panel.eq(0).find('.panel__content').addClass('panel__content--active');
    
    let scrollFx = function() {
      let ds = doc.scrollTop();
      let of = vh / 4;
      
      // if the panel is in the viewport, reveal the content, if not, hide it.
      for (let i = 0; i < panel.length; i++) {
        if (panel.eq(i).offset().top < ds+of) {
         panel
           .eq(i)
           .find('.panel__content')
           .addClass('panel__content--active');
        } else {
          panel
            .eq(i)
            .find('.panel__content')
            .removeClass('panel__content--active')
        }
      }
    };
    
    let scrolly = function(e) {
      e.preventDefault();
      let target = this.hash;
      let $target = $(target);
    
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 300, 'swing', function () {
          window.location.hash = target;
      });
    }
    
    let init = function() {
      burger.addEventListener('click', openMenu, false);
      window.addEventListener('scroll', scrollFx, false);
      window.addEventListener('load', scrollFx, false);
      $('a[href^="#"]').on('click',scrolly);
    };
    

  }


}
