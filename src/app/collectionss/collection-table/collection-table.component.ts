import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.css'],
})
export class CollectionTableComponent implements OnInit {
  @Input() data: any = [];
  @Input() header: any = [];

  @Input() cell:boolean=false
  @Input() striped:string=''

  constructor() {}

  ngOnInit(): void {}
}
