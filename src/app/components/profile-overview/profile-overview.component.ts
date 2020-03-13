import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  profile: ProfileOverview;

  constructor(private db: UsersService, private authService: AuthService) {
    this.profile = new ProfileOverview();
  }

  ngOnInit() {
  }

  save() {
    this.db.save(this.profile);
    this.profile = new ProfileOverview();
  }

}
