import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Jane', age: 24, job: 'Designer', employed:true },
    { name: 'Jane', age: 24, job: 'Designer', employed:false },
    { name: 'Jane', age: 24, job: 'Designer',employed:true },
  ];

  header = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed?' },
  ];

  
  constructor() {}

  ngOnInit(): void {}
}
