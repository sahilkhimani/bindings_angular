import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-forms',
  standalone: false,
  
  templateUrl: './server-forms.component.html',
  styleUrl: './server-forms.component.css'
})
export class ServerFormsComponent {
  @Output() server = new EventEmitter<{'serverName' : string, 'serverContent' : string}>();
  @Output() blueprint = new EventEmitter<{'serverName' : string, 'serverContent' : string}>();
  
  serverName = '';
  serverContent = ''; 

  onAddServer() { 
    this.server.emit({
      serverName : this.serverName,
      serverContent : this.serverContent
    })
  }

  onAddBluePrint() {

    this.blueprint.emit({
      serverName : this.serverName,
      serverContent : this.serverContent
    })
   }  
}
