import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  last = ""
  viewed: number[] = []
  @ViewChild("bullets") bullets: ElementRef;
  constructor() { }


  ngAfterViewInit() {
    let el = this.bullets.nativeElement.children[0]
    el.classList.toggle("active")
    this.viewed.push(0)
  }
  init([swiper]: any) {
    swiper.el.querySelector(".text-slate-100").classList.toggle("slide1-text")
  }
  slide([swiper]: any) {
    if (swiper.activeIndex == 1) this.last = "assets/slides/success.gif"
    else if (swiper.activeIndex != 2) this.last = ""
  }
  slideChanged([swiper]: any) {
    let index = swiper.activeIndex
    // slide text animtors
    if (!this.viewed.includes(index)) {
      swiper.el.querySelectorAll(".text-slate-100")[index].classList.toggle(`slide${index + 1}-text`)
      this.viewed.push(index)
    }
    // ended
    let child_arr = this.bullets.nativeElement.children
    for (let el of child_arr) {
      el.classList.remove("active")
    }
    child_arr[index].classList.add("active")
  }

}
