import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any = [];
  indexItem: number = 0;

  constructor() {}

  ngOnInit(): void {}

  toggle(index: number) {
    if (this.indexItem === index) this.indexItem = -1;
    else {
      this.indexItem = index;
    }
  }
}
