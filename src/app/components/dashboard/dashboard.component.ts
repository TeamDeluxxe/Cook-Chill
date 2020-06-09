import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {UsersService} from '../../shared/services/users.service';
import {ProfileOverview} from '../../models/Profile-Overview';
import {AngularFirestore} from '@angular/fire/firestore';

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
    private userService: UsersService,
    private db: AngularFirestore
  ) {
    this.users = new ProfileOverview();
  }

  ngOnInit() {
  }

  getProfile() {
    return this.db.collection('profile').snapshotChanges();
  }
}
