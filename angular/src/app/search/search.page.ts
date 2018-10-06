import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results: Array<string> = [];
  
  copyLegends: Array<string> = legends;

  ngOnInit() {
  }

  onSearch(event: any) {
    
    this.searchInput = event.target.value;
    
    if (this.searchInput.length === 0){
      this.results = [];
    }
    
    if (this.searchInput && this.searchInput.trim() != '') {
      this.results = this.copyLegends.filter( (elem) => this.checkValue(elem));  
    }
    
    console.log(`Search: ${this.searchInput}`);
  }
  
  checkValue(value) {
    let regex = new RegExp(this.searchInput, 'i');
    return regex.test(value);
  }
}
