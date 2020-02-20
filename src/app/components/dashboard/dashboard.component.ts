import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {UsersService} from '../../shared/services/users.service';
import {NgForm} from '@angular/forms';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  users: ProfileOverview;

  constructor(
    public authService: AuthService,
    private userService: UsersService
  ) {
    this.users = new ProfileOverview();
  }

  ngOnInit() {
  }

}
