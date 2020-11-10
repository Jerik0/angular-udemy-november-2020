import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // (None, Native) (THIS IS WHAT ANGULAR USES TO SEPARATE CSS FILES TO THEIR CORRESPONDING COMPONENTS)
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Test Server',
      content: 'Just a test!'
    }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    let serverName = serverData.serverName === '' ? 'default server name' : serverData.serverName;
    let serverContent = serverData.serverContent === '' ? 'default server content' : serverData.serverContent;
    this.serverElements.push({
      type: 'server',
      name: serverName,
      content: serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    let blueprintName = blueprintData.serverName === '' ? 'default blueprint name' : blueprintData.serverName;
    let blueprintContent = blueprintData.serverContent === '' ? 'default blueprint content' : blueprintData.serverContent;
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintName,
      content: blueprintContent
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

}
