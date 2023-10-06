import { Component } from '@angular/core';
import {count} from "rxjs";

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  paragraph = 'Tuna';
  clickLog = [];
  count = 0

  onPClick(){
    this.count++;
    this.clickLog.push(this.paragraph + this.count)
  }

  getColor() {
    return this.count > 5 ? 'blue' : 'white';
  }

}
