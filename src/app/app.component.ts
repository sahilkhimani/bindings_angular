import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bindingProject';

  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerCreated(data:{serverName : string, serverContent : string}){
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onBluePrintCreated(data:{serverName : string, serverContent : string}){
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }

}
