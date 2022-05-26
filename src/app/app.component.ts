import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("drawer", { static: false }) drawer: MatDrawer;
  constructor(
    private sidenavService: SidenavService
  ) {
    this.sidenavService.status.subscribe(status => {
      if(this.drawer) this.drawer.toggle();
    })
  }
}
