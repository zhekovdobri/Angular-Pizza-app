import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  social=[{
    href:'https://www.facebook.com/lionsclubs/',
    net:'facebook',
    icon:'fa fa-facebook'
  },{
    href:'https://www.instagram.com/lionsclubs/',
    net:'instagram',
    icon:'fa fa-instagram'
  },{
    href:'https://www.linkedin.com/company/lions-clubs-international',
    net:'linkedin',
    icon:'fa fa-linkedin'
  },{
    href:'https://twitter.com/lionsclubs',
    net:'twitter',
    icon:'fa fa-twitter'
  },{
    href:'https://youtube.com/lionsclubs',
    net:'youtube',
    icon:'fa fa-youtube'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
