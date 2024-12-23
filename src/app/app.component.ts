import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  serverElements: [{ type: string, name: string, content: string }] = [{ type: 'blueprint', name: 'First Server', content: 'My blueprint server' }];

  serverCreated(data: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'server',
        name: data.serverName,
        content: data.serverContent
      }
    )
  }
  blueprintCreated(data: { serverName: string, serverContent: string }) {
    this.serverElements.push(
      {
        type: 'blueprint',
        name: data.serverName,
        content: data.serverContent
      }
    )
  }
}
