import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  standalone: false,
  
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.css'
})
export class FormElementComponent {
name = '';
content = '';

@Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>()
@Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>()

onAddServer(){
  this.serverCreated.emit({
    serverName : this.name,
    serverContent : this.content
  })  
}
onAddServerBlueprint(){
  this.blueprintCreated.emit({
    serverName : this.name,
    serverContent : this.content
  })  
}
}
