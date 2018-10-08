import { Component, OnInit } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage implements OnInit {
  
  legends: Array<string> = legends;
  editMode: Array<boolean> = [];
  
  inputVal: string;

  constructor() { 
  }
  
  ngOnInit() {
    for (let i = 0; i < this.legends.length; i++) {
      this.editMode.push(false);
    }
  }
  
  save(legend, index){
    legends[index] = legend;
    this.editMode[index] = false;
  }
  
  edit(index) {
    this.editMode[index] = true;
  }

}


