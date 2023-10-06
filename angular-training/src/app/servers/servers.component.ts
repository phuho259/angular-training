import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus= 'No server was created!! ';
  serverName = 'TestServer';
  serverCreeated =false;
  servers=['Test Server','Test Server 2']

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 3000);
  }
  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'New server created ! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreeated = true;
  }

  onUpdateServerName(event : any) {
    this.serverName = event.target.value;
  }

}
