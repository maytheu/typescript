import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statustics',
  templateUrl: './statustics.component.html',
  styleUrls: ['./statustics.component.css'],
})
export class StatusticsComponent implements OnInit {
  @Input() data: any=[]

  constructor() {}

  ngOnInit(): void {}
}
