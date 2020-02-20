import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opened = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  private toggleSidebar() {
    this.opened = !this.opened;
  }
}
