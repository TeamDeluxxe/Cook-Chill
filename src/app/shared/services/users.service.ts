import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ProfileOverview} from '../../models/Profile-Overview';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  profile: Observable<ProfileOverview[]>;

  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.profile = db.collection<ProfileOverview>('foo').valueChanges();
  }

  async save(profile: ProfileOverview) {
    await this.db.collection('/users').add({
        // firstName: profile.firstName,
        allergies: profile.allergies
      });
  }

}
