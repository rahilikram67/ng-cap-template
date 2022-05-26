import { Component, Input, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidebutton',
  templateUrl: './sidebutton.component.html',
  styleUrls: ['./sidebutton.component.scss']
})
export class SidebuttonComponent implements OnInit {
  @Input() color: string;
  @Input() class = ""
  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
  }
  toggle() {
    this.sidenavService.toggle()
  }
}
