import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  isModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isModal = !this.isModal;
  }
}
