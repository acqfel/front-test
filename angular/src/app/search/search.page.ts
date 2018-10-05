import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results = [];
  
  copyLegends: Array<string> = legends;
  filterArray: Array<string>;

  ngOnInit() {
  }

  onSearch() {
    console.log(`Search: ${this.searchInput}`);
    this.filterArray = this.copyLegends.filter( (elem) => this.checkValue(elem));
  }
  
  checkValue(value) {
    
    let regex = new RegExp(this.searchInput, 'i');
    console.log(value.length);
    return regex.test(value);
  }
}
