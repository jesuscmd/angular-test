import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    $(document).ready(function () {
      //fire sliders
      $('.slider-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
      });
    });
  }
}
