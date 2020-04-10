import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    $(document).ready(function () {
      const $html = $('html');
      const $header = $('header');
      //Add bg to fixed menu
      $(window).on('scroll', function () {
        if ($html.scrollTop() > 100) {
          if (!$header.hasClass('active')) {
            $header.addClass('active');
          }
        } else {
          if ($header.hasClass('active')) {
            $header.removeClass('active');
          }
        }
      });
    });
  }
}
