import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: 'Favs' },
    { value: 22, label: 'Favs' },
    { value: 22, label: 'Favs' },
    { value: 22, label: 'Favs' },
  ];

  items = [
    {
      img: '/assets/couch.jpeg',
      desc: 'Fantastic Couch',
      title: 'Couch',
    },
    {
      img: '/assets/dresser.jpeg',
      title: 'Dresser',
      desc: 'Dresser Img',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
