import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../models/user';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  profile: ProfileOverview;
  list: ProfileOverview[];

  constructor(private db: UsersService, private authService: AuthService, fire: AngularFirestore) {
    // this.profile = new ProfileOverview();

    this.db.getProfile().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as ProfileOverview;
      });
    });

  }

  ngOnInit() {

  }


  save() {
    this.db.save(this.profile);
    this.profile = new ProfileOverview();
  }

  delete(p: ProfileOverview) {
    this.db.delete(p);
  }
}
