import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-input-data-blinding',
  templateUrl: './assignment-input-data-blinding.component.html',
  styleUrls: ['./assignment-input-data-blinding.component.css']
})
export class AssignmentInputDataBlindingComponent {
  username = '';
  checkDisabled() {
     return this.username.length == 0;
  }
  reset() {
    this.username = '';
  }

}
