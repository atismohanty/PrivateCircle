import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  public loaded: boolean = false;
  public data: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.data = [
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3' ],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3' ],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ['value1', 'value2', 'value3'],
    ];
  }
  public resetLoaded() {
    this.loaded = !this.loaded;
  }
}
