import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isSearchBoxOpened:boolean = false
  constructor() {}
  onSearch(event){
    console.log(event.target.value);
  }
}
