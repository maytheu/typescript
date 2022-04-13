import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  isModal: boolean = false;
  items = [
    { title: 'dog', msg: 'dog is an animal' },
    { title: 'cat', msg: 'dog is an animal' },
    { title: 'meow', msg: 'dog is an animal' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isModal = !this.isModal;
  }
}
